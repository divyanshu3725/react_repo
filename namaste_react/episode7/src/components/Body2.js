import user from "../utils/UserData"
import { imageGridCards, restaurantsArray1 } from "../utils/MockData"
import { imageCardURLInitialPart, topRestaurantImageURLInitialPart, topRestaurantsSVGdValue } from "../utils/Constants";
import { fullName, fullAddress, showHeaders, showRating } from "./Functionality";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// BODY COMPONENT
const Body2 = () => {
    console.log('body comp rerendered');
    // let [listOfRestaurants,setlistOfRestaurants] = useState(restaurantsArray1.data);
    // let [listOfDishes,setlistOfDishes] = useState(imageGridCards);
    let [fetchedListOfRestaurants, setfetchedListOfRestaurants] = useState([]);
    let [listOfRestaurants, setlistOfRestaurants] = useState([]);
    let [listOfDishes, setlistOfDishes] = useState([]);
    let [filterValue, setfilterValue] = useState('Top Rated');
    let [searchText, setsearchText] = useState('');
    // console.log('fetchedlistofrestaurants is ');
    // console.log(fetchedListOfRestaurants);
    const fetchSwiggyAPIData = async () => {
        const apiData = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.0796545&lng=82.1409152&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        // const apiData = await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.0796545&lng=82.1409152&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const jsonData = await apiData.json();
        // jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map((res) => {
        //     console.log(res.cta.link.toString().slice(35));
        // })
        // setlistOfRestaurants(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        // setlistOfDishes(jsonData.data.cards[0].card.card.imageGridCards.info);
        // setTimeout(() => {
        console.log('restarurants: ');
        console.log(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log('dishes: ');
        console.log(jsonData?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        setfetchedListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setlistOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setlistOfDishes(jsonData?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        // }, 2000);
    };

    // IF USE EFFECT ISN'T GIVEN ANY DEPENDENCY ARRAY
    // useEffect(() => {
    //     console.log("useEffect hook callback called");
    //     fetchSwiggyAPIData();
    // });

    // IF USE EFFECT IS GIVEN AN EMPTY DEPENDENCY ARRAY
    // useEffect(() => {
    //     console.log("useEffect hook callback called");
    //     fetchSwiggyAPIData();
    // },[]);
    
    // IF USE EFFECT IS GIVEN SOME DEPENDENCY
    useEffect(() => {
        // console.log("useEffect hook callback called");
        fetchSwiggyAPIData();
    },[]);


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
    const ImageCard = ({ cardObj }) => {
        return (
            <div className="inline-block box-border border-2 border-solid border-white mr-[12px]">
                <img className="block box-border" src={`${imageCardURLInitialPart}${cardObj.imageId}`} width="148px" height="185px"></img>
            </div>
        );
    };

    // TOPRESTAURANT SHIMMER COMPONENTS STYLE OBJECT
    const shimmerStyleObj = {
        "background": "rgb(220 220 220)",
        "backgroundImage": "linear-gradient(to right, rgb(231 229 228) 0%, rgb(214 211 209) 20%, rgb(231 229 228) 40%, rgb(231 229 228) 100%)",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "310px",
        "display": "inline-block",
        "position": "relative",
        "WebkitAnimationDuration": "1.5s",
        "WebkitAnimationFillMode": "forwards",
        "WebkitAnimationIterationCount": "infinite",
        "WebkitAnimationName": "placeholderShimmer",
        "WebkitAnimationTimingFunction": "linear",
    }

    // IMAGECARDSHIMMER COMPONENT
    const ImageCardShimmer = () => {
        return (
            <div className="inline-block box-border mr-[12px] rounded-[10px]" style={shimmerStyleObj}>
                <img className="block box-border" width="148px" height="185px"></img>
            </div>
        );
    };

    // DESTRUCTURING THE WHOLE RESTAURANT OBJECT THAT WE RECIEVED AS AN ARGUMENTS
    const TopRestaurantCard = ({ res }) => {
        const { cloudinaryImageId, name, avgRating, sla, cuisines, areaName } = { ...res.info }
        const { link } = { ...res.cta }
        return (
            <div className="pizzaHut inline-block box-border inline-block relative border-2 border-solid border-white mr-[20px] w-[273px] h-[310px]">
                {/* IMAGE ELEMENT */}
                <Link to={`/restaurants/${link.toString().slice(35)}`}><img className="relative" style={{ width: '273px', height: '182px', cursor: 'pointer', objectFit: 'cover', borderRadius: '20px' }} src={`${topRestaurantImageURLInitialPart}${cloudinaryImageId}`} alt="Pizza Hut"></img></Link>
                {/* HEADER DARD BACKGROUND ELEMENT  */}
                <div className="w-[271px] rounded-[20px] color h-[73px] flex items-end absolute bottom-[124px]" style={{ backgroundImage: 'linear-gradient(rgba(27, 30, 36, 0) 0%, rgb(27, 30, 36) 84.21%)' }}>
                    {/* HEADER ELEMENT */}
                    <div className="text-[22px] font-[800] tracking-[-0.5px] text-white px-[12px] py-[6px]">{showHeaders(res)}</div>
                </div>
                {/* RESTAURANT DETAILS ELEMENT */}
                <div className="px-[14px] py-[8px]">
                    {/* RESTAURANT NAME */}
                    <div className="font-semibold opacity-90 text-[18px] leading-tight my-[2px]"><span className="overflow-hidden text-ellipsis block">{name}</span></div>
                    {/* RATING AND EDT CONTAINING ELEMENT */}
                    <div className="leading-tight my-[2px]">
                        {/* RATING ICON ELEMENT */}
                        <svg className="inline-block mr-[5px]" width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true"><circle cx="10" cy="10" r="9" fill="#1eb346"></circle><path d={topRestaurantsSVGdValue} fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stopColor="#21973B"></stop><stop offset="1" stopColor="#128540"></stop></linearGradient></defs></svg>
                        {/* RATING ELEMENT */}
                        <span className="mr-[8px] font-semibold opacity-90">{showRating(avgRating)}</span>
                        {/* EDT ELEMENT */}
                        <span className="mr-[5px] font-semibold opacity-90">{sla.slaString}</span>
                    </div>
                    {/* CUISINES ELEMENT */}
                    <div><span className="overflow-hidden opacity-90 text-ellipsis block leading-tight my-[2px]">{cuisines.join(', ')}</span></div>
                    {/* AREANAME ELEMENT */}
                    <div className="leading-tight my-[2px] opacity-90">{areaName}</div>
                </div>
            </div>
        )
    };

    // TOPRESTAURANT SHIMMER COMPONENT
    const TopRestaurantCardShimmer = () => {
        return (
            <div className="pizzaHut inline-block box-border inline-block relative border-2 border-solid border-white mr-[20px] w-[273px] h-[310px] rounded-[8px]" style={shimmerStyleObj}>
                {/* IMAGE ELEMENT */}
                <img className="relative" style={{ width: '273px', height: '182px', cursor: 'pointer', objectFit: 'cover', borderRadius: '20px' }}></img>
                {/* HEADER DARD BACKGROUND ELEMENT  */}
                <div className="w-[271px] rounded-[20px] color h-[73px] flex items-end absolute bottom-[124px]">
                    {/* HEADER ELEMENT */}
                    <div className="text-[22px] font-[800] tracking-[-0.5px] text-white px-[12px] py-[6px]">&nbsp;</div>
                </div>
                {/* RESTAURANT DETAILS ELEMENT */}
                <div className="py-[14px] px-[10px]">
                    {/* RESTAURANT NAME */}
                    <div className="font-bold text-[18px] bg-white px-[10px] rounded-[5px] leading-none my-[5px]"><span className="overflow-hidden text-ellipsis block">&nbsp;</span></div>
                    {/* RATING AND EDT CONTAINING ELEMENT */}
                    <div className=" rounded-[5px] leading-none my-[5px]">
                        {/* RATING ELEMENT */}
                        <span className="mr-[8px] rounded-[4px] font-bold bg-white inline-block w-[80px]">&nbsp;</span>
                        {/* EDT ELEMENT */}
                        <span className="mr-[5px] rounded-[4px] font-bold bg-white inline-block w-[80px]">&nbsp;</span>
                    </div>
                    {/* CUISINES ELEMENT */}
                    <div><span className="overflow-hidden text-ellipsis block bg-white px-[10px] rounded-[5px] leading-none my-[5px]">&nbsp;</span></div>
                    {/* AREANAME ELEMENT */}
                    <div className="bg-white px-[10px] rounded-[5px] leading-none my-[5px]">&nbsp;</div>
                </div>
            </div>
        )
    };

    // SECTION1IMAGE BOX COMPONENT
    const Section1ImageBox = () => {
        // console.log("rendering the section1image box")
        let emptyArray10 = [0,1,2,3,4,5,6,7,8,9,10];
        // console.log("length listofdish is ",listOfDishes.length);
        if (listOfDishes.length == 0) {
            // console.log("going to return shimmer image cards");
            return (
                <div id="section1ImageBox" className="py-2 border-2 border-solid border-white overflow-auto whitespace-nowrap mx-[200px] mb-[70px]">
                    {emptyArray10.map(gridCard => <ImageCardShimmer key={gridCard} />)}
                </div>
            )
        }
        else {

            return (
                <div id="section1ImageBox" className="py-2 border-2 border-solid border-white overflow-auto whitespace-nowrap mx-[200px] mb-[70px]">
                    {listOfDishes.map(gridCard => <ImageCard key={gridCard.id} cardObj={gridCard} />)}
                </div>
            )
        };
    };

    // SECTION2IMAGE BOX COMPONENT
    const Section2ImageBox = () => {
        // console.log("rendering the section2ImageBox");
        let emptyArray10 = [0,1,2,3,4,5,6,7,8,9,10];
        // console.log(listOfRestaurants);
        if (listOfRestaurants.length == 0) {
            // console.log("going to return shimmer restaurant cards")
            return (
                <div id="section2ImageBox" className="py-2 border-2 border-solid border-white overflow-auto whitespace-nowrap h-[380px] mx-[200px]">
                    {emptyArray10.map(restaurant => <TopRestaurantCardShimmer key={restaurant} />)}
                </div>
            )
        }
        else {
            return (
                <div id="section2ImageBox" className="py-2 border-2 border-solid border-white overflow-auto whitespace-nowrap h-[380px] mx-[200px]">
                    {/* {restaurantsArray1.data.map(restaurant => <TopRestaurant res={restaurant} />)} */}
                    {listOfRestaurants.map(restaurant => <TopRestaurantCard key={restaurant.info.id} res={restaurant} />)}
                </div>
            )
        };
    };

    // SECTION1HEAD COMPONENT
    const Section1Head = () => {
        return (
            <div className="section1head flex justify-between mx-[200px]">
                <Section1Question />
                <Section1Navigation />
            </div>
        )
    }

    // FILTER FUNCTION
    const filterRestaurants = () => {
        if (filterValue == 'Top Rated') {
            const newListOfRestaurants = fetchedListOfRestaurants.filter(elem => elem.info.avgRating > 4.2);
            setfilterValue('All');
            console.log('top rated click');
            setlistOfRestaurants(newListOfRestaurants);
            setsearchText('');
        }
        else {
            console.log('all click');
            setfilterValue('Top Rated');
            setlistOfRestaurants(fetchedListOfRestaurants);
            setsearchText('');
        }
    };

    // TOPRATED RESATRURANT BUTTON COMPONENT
    const FilterButton = ({ func }) => {
        // console.log('filter button comp called');
        return (
            <button onClick={func}
                className="border-2 border-solid border-black font-bold rounded-[5px] w-[90px]"
            >
                {filterValue}
            </button>
        )
    };

    // SECTION2HEAD COMPONENT
    const Section2Head = () => {
        return (
            <div className="section1head flex justify-between mx-[200px]">
                <Section2Question />
                <Section2Navigation />
            </div>
        )
    }

    // SEARCH BAR COMPONENT
    const SearchBox = () => {
        return (
            <div>
                <button className="border-2 border-solid border-black font-bold rounded-[3px] px-[3px]" onClick={() => {
                    let sampleArray = fetchedListOfRestaurants;
                    // FILTER BY NAME
                    sampleArray = sampleArray.filter((elem) => (
                        (elem.info.name.toLowerCase().indexOf(searchText.toLowerCase()) != -1) 
                        ||
                        (elem.info.cuisines.join(' ').toLowerCase().indexOf(searchText.toLowerCase()) != -1) 
                        ));
                    // FILTER BY CUISINES
                    // sampleArray = sampleArray.filter((elem) => elem.info.cuisines.join(' ').indexOf(searchText) != -1);
                    // console.log(sampleArray);
                    // console.log(sampleArray);
                    setlistOfRestaurants(sampleArray);
                    // console.log(listOfRestaurants);
                }}>Search</button>
            </div>
        )
    };

    // RETURNING 
    return (
        <div className="body">
            {/* <Section1 /> */}
            {/* <Section2 /> */}
            <Section1Head />
            <Section1ImageBox />
            <Section2Head />
            <div className="mx-[200px] flex justify-between border-2 border-solid border-white">
                <div className="border-2 border-solid border-white flex">
                    <input type="text"
                           className="px-[5px] searchBox border-[1px] border-solid border-black mx-[5px] rounded-[3px]"
                           value={searchText}
                           onChange={
                                (e) => {setsearchText(e.target.value)
                           }}
                           >
                    </input>
                    <SearchBox />
                </div>
                <FilterButton func={filterRestaurants} />
            </div>
            <Section2ImageBox />
        </div>
    )
};

// setTimeout(() => {

//     let right1 = document.getElementById('slideRight1');
//     right1.onclick = function () {
//         console.log('right slide clicked');
//         let container1 = document.getElementById('section1ImageBox');
//         sideScroll(container1, 'right', 10, 435, 5);
//     };

//     let left1 = document.getElementById('slideLeft1');
//     left1.onclick = function () {
//         console.log('left slide clicked');
//         let container1 = document.getElementById('section1ImageBox');
//         sideScroll(container1, 'left', 10, 435, 5);
//     };
//     let right2 = document.getElementById('slideRight2');
//     right2.onclick = function () {
//         console.log('right slide clicked');
//         let container1 = document.getElementById('section2ImageBox');
//         sideScroll(container1, 'right', 30, 540, 50);
//     };

//     let left2 = document.getElementById('slideLeft2');
//     left2.onclick = function () {
//         console.log('left slide clicked');
//         let container1 = document.getElementById('section2ImageBox');
//         sideScroll(container1, 'left', 30, 540, 50);
//     };

//     function sideScroll(element, direction, speed, distance, step) {
//         scrollAmount = 0;
//         let slideTimer = setInterval(function () {
//             if (direction == 'left') {
//                 element.scrollLeft -= step;
//             } else {
//                 element.scrollLeft += step;
//             }
//             scrollAmount += step;
//             if (scrollAmount >= distance) {
//                 window.clearInterval(slideTimer);
//             }
//         }, speed);
//     }
// }, 1000);

export default Body2;