import React, { useState } from "react";
import ModalComponent from "./common/ModalComponent";
import SortComponent from "./SortComponent";
import FilterSection from "./FilterSection";
import Modal from 'react-modal';

const MobileFooter = ({ onFilterChange, onSort, products }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const handleModalOpen = (type) => {
    console.log("Opening modal:", type);
    setModalType(type);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    console.log("Closing modal");
    setModalOpen(false);
  };

  console.log("Modal open:", modalOpen);
  console.log("Modal type:", modalType);

  return (
    <>
      <div className="mb-footer">
        <button onClick={() => handleModalOpen("filter")}>Filter</button>
        <button onClick={() => handleModalOpen("sort")}>Sort</button>
      </div>
      <ModalComponent isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
        {modalType === "filter" && <FilterSection products={products} onFilterChange={onFilterChange} />}
        {modalType === "sort" && <SortComponent onSort={onSort} />}
      </ModalComponent>
    </>
  );
};

export default MobileFooter;
