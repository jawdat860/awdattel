import React, { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import axios from "axios";
import CategorySlider from "./CategorySlider";
import ServiceModal from "./ServiceModal";
import { Spinner } from "@telegram-apps/telegram-ui";
import FooterFlex from "../FooterFlex/FooterFlex";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);
  const [activeService, setActiveService] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("https://menuapp.ru/api/v1");
        setServices(response.data);
        console.log(response.data)
        const allCategories = [
          ...new Set(response.data.map((service) => service.category)),
        ];
        setCategories(["All", ...allCategories]);

        setLoading(false);

      } catch (err) {
        setError("Failed to load services.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (service) => {
    setActiveService(service);
    setIsModalOpen(true);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="container   relative jawdat">
      <h1 className="text-2xl font-bold text-center mb-6">Our Services</h1>
      <div className="flex items-center  top-[0px] h-16 sticky inset-x-0   z-[5] bg-white  dark:bg-[#101726] rounded-b-[20px] ">
      <CategorySlider
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
     
     </div>
       { (loading) ?

        <div className="flex justify-center items-center h-[100%]">
  
         {<Spinner/>}
         </div> :
           
        <div className="grid gap-4 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative mt-[10px]">
          
          {filteredServices.map((service) => (
            <ServiceCard
            
              key={service.id}
              service={service}
              onClick={() => handleCardClick(service)}
            />
          ))}
        </div>
      
        }
       <ServiceModal
        isOpen={isModalOpen}
        onClose={setIsModalOpen}
        service={activeService}
      /> 
      {/* <FooterFlex /> */}
    </div>
  );
};

export default Services;
