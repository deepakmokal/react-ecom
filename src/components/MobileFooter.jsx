import React, { useState, lazy } from "react";
import FilterSection from "./FilterSection";
import { Suspense } from "react";

const SortComponent = lazy(() => import("./SortComponent"));
const ModalComponent = lazy(() => import("./common/ModalComponent"));

const MobileFooter = ({ onFilterChange, onSort, products }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const handleModalOpen = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <>
      <div className="mb-footer">
        <button onClick={() => handleModalOpen("filter")}>Filter</button>
        <button onClick={() => handleModalOpen("sort")}>Sort</button>
      </div>
      <Suspense fallback={<h3>Loading...</h3>}>
        <ModalComponent
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
        >
          {modalType === "filter" && (
            <FilterSection
              products={products}
              onFilterChange={onFilterChange}
            />
          )}
          {modalType === "sort" && <SortComponent onSort={onSort} />}
        </ModalComponent>
      </Suspense>
    </>
  );
};

export default MobileFooter;
