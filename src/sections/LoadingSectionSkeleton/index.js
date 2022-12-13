import React from "react";

const LoadingSectionSkeleton = () => {
    return (
        <>
          <div className="shadow-md rounded-xl w-[80%] flex flex-row items-center justify-center p-8 bg-container-light dark:bg-container-dark animate-pulse">
              <CardSkeletonValue/>
              <CardSkeletonValue/>
              <CardSkeletonValue/>
          </div>
          <div className="flex flex-col items-center justify-center mt-12 w-full animate-pulse">
              <AccordionSkeletonValue/>
              <AccordionSkeletonValue/>
          </div> 
        </>
    );
};

const AccordionSkeletonValue = () => {
    return (
        <div className="mt-8 relative p-10 w-[80%] bg-container-light dark:bg-container-dark-200 rounded-lg shadow-lg"></div>
    );
}

const CardSkeletonValue = () => {
    return (
        <div className={`text-white dark:text-white shadow-lg w-48 rounded-lg flex flex-col items-center ml-5 bg-gradient-to-r from-blue-600 to-blue-400 p-8`}>
            <div className="bg-white bg-opacity-50 h-9 w-9 rounded-full mb-3"></div>
            <div className="p-1 w-[65%] rounded-full bg-white bg-opacity-50"></div>
        </div>
    );
}

export default LoadingSectionSkeleton;