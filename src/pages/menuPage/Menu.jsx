import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import { FaFilter } from "react-icons/fa";
import ScrollReveal from 'scrollreveal'

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Number of items to display per page

  useEffect(() => {
    // Fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch("https://bistro-restaurant-server-na3r.onrender.com/menu");
        const data = await response.json();
        setMenu(data);
        setFilteredItems(data); // Initially, display all items
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);

    setFilteredItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  const handleSortChange = (option) => {
    setSortOption(option);

    // Logic for sorting based on the selected option
    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        // Do nothing for the "default" case
        break;
    }

    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };

  //   console.log(filteredItems);
  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('#info1', {
      origin: 'left', // Image comes from the left
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 200,
      easing: 'ease',
    });
  
    ScrollReveal().reveal('#info2', {
      origin: 'bottom', // Text comes from the right
      distance: '50px', // Distance to move
      duration: 1000,
      delay: 400,
      easing: 'ease',
    });
  
  }, []);
  

  
  return (
    <div>
      {/* menu banner */}
      <div className="max-w-screen-2xl container mx-auto xl:px-24">
        <div className="py-35 flex flex-col items-center justify-center">
          {/* content */}
          <div className=" text-center px-4 space-y-1 text-[#2c2f24]">
            <h2 id="info2" className="md:text-7xl text-4xl font-light md:leading-snug leading-snug">
              Our Menu
            </h2>
            <p id="info2" className="text-[#485460] text-xl md:w-4/5 mx-auto">
              We consider all the drivers of change gives you the components you
              need to change to create a truly happens.
            </p>
          </div>
        </div>
      </div>

      {/* menu shop  */}
      <div id="info1" className="section-container">
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center mb-4">
            {/* All category buttons */}
            <div className="flex flex-row justify-center md:items-center md:gap-5 gap-4 flex-wrap mt-10">
              <button
                onClick={showAll}
                className={selectedCategory === "all" ? "active" : "all"}
              >
                All
              </button>
              <button
                onClick={() => filterItems("salad")}
                className={selectedCategory === "salad" ? "active" : "all"}
              >
                Salad
              </button>
              <button
                onClick={() => filterItems("pizza")}
                className={selectedCategory === "pizza" ? "active" : "all"}
              >
                Pizza
              </button>
              <button
                onClick={() => filterItems("soup")}
                className={selectedCategory === "soup" ? "active" : "all"}
              >
                Soups
              </button>
              <button
                onClick={() => filterItems("dessert")}
                className={selectedCategory === "dessert" ? "active" : "all"}
              >
                Desserts
              </button>
              <button
                onClick={() => filterItems("drinks")}
                className={selectedCategory === "drinks" ? "active" : "all"}
              >
                Drinks
              </button>
            </div>
            {/* Filter options */}
            {/* <div className="flex items-center ml-10">
      <div className="bg-black p-2">
        <FaFilter className="text-white h-4 w-4" />
      </div>
      <select
        id="sort"
        onChange={(e) => handleSortChange(e.target.value)}
        value={sortOption}
        className="bg-black text-white px-2 py-1 rounded-sm"
      >
        <option value="default"> Default</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        <option value="low-to-high">Low to High</option>
        <option value="high-to-low">High to Low</option>
      </select>
    </div> */}
    
          </div>
        </div>

        {/* product card */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 ">
          {currentItems.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center my-8 flex-wrap gap-2">
        {Array.from({
          length: Math.ceil(filteredItems.length / itemsPerPage),
        }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-full ${
              currentPage === index + 1 ? "bg-[#ad343e] text-white" : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
