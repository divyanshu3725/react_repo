import user from "../utils/UserData"
import {imageGridCards, restaurantsArray1} from "../utils/MockData"
import { imageCardURLInitialPart, topRestaurantImageURLInitialPart, topRestaurantsSVGdValue } from "../utils/Constants";
import {fullName, fullAddress, showHeaders, showRating} from "./Functionality";

// SECTION1QUESTION COMPONENT
const Section1Question = () => {
    return (
        <div className="section1Question text-[23px] font-bold border-2 border-solid border-white">
            {fullName(user)}, what's on your mind?
        </div>
    )
};

// SECTION2QUESTION COMPONENT
const Section2Question = () => {
    return (
        <div className="section1Question text-[25px] font-bold border-2 border-solid border-white">
            Top restaurant chains in {user.city}
        </div>
    )
};

// SECTION1NAVIGATION COMPONENT
const Section1Navigation = () => {
    return (
        <div className="section1navigation w-[80px] flex justify-between border-2 mx-[40px] border-solid px-[10px] border-white">
            <span id="slideLeft1" className="leftArrow bg-slate-300" style={{ color: '#808080', backgroundColor: 'white', textAlign: 'center' }}>
                <i className="fa-solid fa-arrow-left" style={{ position: 'relative', top: '5px' }}></i>
            </span>
            <span id="slideRight1" className="rightArrow bg-slate-300" style={{ color: '#808080', backgroundColor: 'white', textAlign: 'center' }}>
                <i className="fa-solid fa-arrow-right" style={{ position: 'relative', top: '5px' }}></i>
            </span>
        </div>
    )
}

// SECTION2NAVIGATION COMPONENT
const Section2Navigation = () => {
    return (
        <div className="section1navigation w-[80px] flex justify-between border-2 mx-[40px] border-solid px-[10px] border-white">
            <span id="slideLeft2" className="leftArrow bg-slate-300" style={{ color: '#808080', backgroundColor: 'white', textAlign: 'center' }}>
                <i className="fa-solid fa-arrow-left" style={{ position: 'relative', top: '5px' }}></i>
            </span>
            <span id="slideRight2" className="rightArrow bg-slate-300" style={{ color: '#808080', backgroundColor: 'white', textAlign: 'center' }}>
                <i className="fa-solid fa-arrow-right" style={{ position: 'relative', top: '5px' }}></i>
            </span>
        </div>
    )
}

// IMAGECARD COMPONENT
const ImageCard = ({cardObj}) => {
    return (
        <div className="inline-block box-border border-2 border-solid border-white mr-[12px]">
            <img className="block box-border" src={`${imageCardURLInitialPart}${cardObj.imageId}`} width="148px" height="185px"></img>
        </div>
    );
};

// DESTRUCTURING THE WHOLE RESTAURANT OBJECT THAT WE RECIEVED AS AN ARGUMENTS
const TopRestaurant = ({res}) => {
    const {cloudinaryImageId,name,avgRating,sla,cuisines,areaName} = {...res.info}
    return (
        <div className="pizzaHut inline-block box-border inline-block relative border-2 border-solid border-white mr-[20px] w-[273px]">
             {/* IMAGE ELEMENT */}
            <img className="relative" style={{ width: '273px', height: '182px', cursor: 'pointer', objectFit: 'cover', borderRadius: '20px' }} src={`${topRestaurantImageURLInitialPart}${cloudinaryImageId}`} alt="Pizza Hut"></img>
             {/* HEADER DARD BACKGROUND ELEMENT  */}
            <div className="w-[273px] rounded-[20px] color h-[73px] flex items-end absolute bottom-[127px]" style={{ backgroundImage: 'linear-gradient(rgba(27, 30, 36, 0) 0%, rgb(27, 30, 36) 84.21%)' }}>
             {/* HEADER ELEMENT */}
            <div className="text-[22px] font-[800] tracking-[-0.5px] text-white px-[12px] py-[6px]">{showHeaders(res)}</div>
            </div>
             {/* RESTAURANT DETAILS ELEMENT */}
            <div className="p-[14px]">
                 {/* RESTAURANT NAME */}
                <div className="font-bold text-[18px]"><span className="overflow-hidden text-ellipsis block">{name}</span></div>
                 {/* RATING AND EDT CONTAINING ELEMENT */}
                <div>
                     {/* RATING ICON ELEMENT */}
                    <svg className="inline-block mr-[5px]" width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d={topRestaurantsSVGdValue} fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs></svg>
                     {/* RATING ELEMENT */}
                    <span className="mr-[8px] font-bold">{showRating(avgRating)}</span>
                     {/* EDT ELEMENT */}
                    <span className="mr-[5px] font-bold">{sla.slaString}</span>
                </div>
                 {/* CUISINES ELEMENT */}
                <div><span className="overflow-hidden text-ellipsis block">{cuisines.join(', ')}</span></div>
                 {/* AREANAME ELEMENT */}
                <div>{areaName}</div>
            </div>
        </div>
    )
};

// SECTION1IMAGE BOX COMPONENT
const Section1ImageBox = () => {
    return (
        <div id="section1ImageBox" className="py-2 border-2 border-solid border-white overflow-auto whitespace-nowrap">
            {imageGridCards.map(gridCard => <ImageCard cardObj={gridCard}/>)}
        </div>
    )
};

// SECTION2IMAGE BOX COMPONENT
const Section2ImageBox = () => {
    return (
        <div id="section2ImageBox" className="py-2 border-2 border-solid border-white overflow-auto whitespace-nowrap h-[380px]">
            {restaurantsArray1.map(restaurant => <TopRestaurant res={restaurant}/>)}
        </div>
    )
};

// SECTION1HEAD COMPONENT
const Section1Head = () => {
    return (
        <div className="section1head flex justify-between">
            <Section1Question />
            <Section1Navigation />
        </div>
    )
}

// SECTION2HEAD COMPONENT
const Section2Head = () => {
    return (
        <div className="section1head flex justify-between">
            <Section2Question />
            <Section2Navigation />
        </div>
    )
}

// SECTION1 COMPONENT
const Section1 = () => {
    return (
        <div className="section1 border-2 border-white border-solid mx-[200px] pb-[40px] mb-[40px]">
            <Section1Head />
            <Section1ImageBox />
        </div>
    )
}

// SECTION2 COMPONENT
const Section2 = () => {
    return (
        <div className="section2 border-2 border-white border-solid mx-[200px]">
            <Section2Head />
            <Section2ImageBox />
        </div>
    )
}

// BODY COMPONENT
const Body = () => {
    return (
        <div className="body">
            <Section1 />
            <Section2 />
        </div>
    )
};

export default Body;