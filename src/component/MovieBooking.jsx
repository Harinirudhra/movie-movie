// import React, { useState } from "react";


// let SCREENS = [
//     {
//         id: 1,
//         time: "10.00Am",
//         seats: [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0 ,1 ,0 ,1 ,1 ,0 ,1 ,0, 0 ,1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1,1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0 ,1 ,0 ,1 ,1 ,0 ,1 ,0, 0 ,1, 0,1 ]
//     },
//     {
//         id: 2,
//         time: "9.00Am",
//         seats: [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0 ,1 ,0 ,1 ,1 ,0 ,1 ,0, 0 ,1, 0, 1, 1, 1, 1, 1, 1, 1]
//     },
//     {
//         id: 3,
//         time: "11.00Am",
//         seats: [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0]
//     },
//     {
//         id: 4,
//         time: "1.00Am",
//         seats: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1]
//     },
//     {
//         id: 5,
//         time: "12.00Am",
//         seats: [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1,  0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1]
//     },
// ];

// const MOVIE = [
//     {
//         id: 1,
//         title: "Demony colony 2",
//         image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICAzNS43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00380018-vlvxmddfxg-portrait.jpg"
//     },
//     {
//         id: 2,
//         title: "Vaazhai",
//         image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICAyMS42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408594-kxylmtxdpl-portrait.jpg"
//     },
//     {
//         id: 3,
//         title: "Thagalan",
//         image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC8xMCAgNjAuNksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00343221-jhvvdffcwz-portrait.jpg"
//     },
//     {
//         id: 4,
//         title: "Kottukkali ",
//         image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni4zLzEwICA0LjlLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408897-qqdbaknnxt-portrait.jpg"
//     },
//     {
//         id: 5,
//         title: "Sarkate ka Antank",
//         image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgMjcyLjRLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00364249-khjjypdaat-portrait.jpg"
//     },
//     {
//         id: 6,
//         title: "Saripodha Sanivaram",
//         image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4xLzEwICAzNy45SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00388631-qnhmahsruh-portrait.jpg"
//     },
// ]









// export default function MovieBooking() {

//     const [selectedMovie, setSelectedMovie] = useState(null)
//     const [selectedScreen,setSelectedScreen]=useState(null)
//     const [selectedSeats,setSelectedSeats]=useState([])
//     const  handleSeatSelect=(index,screen)=>{
//         if (screen?.id !== selectedScreen?.id){
//             setSelectedSeats([index])
//             selectedScreen(screen)
//             return
//         }
//         setSelectedScreen(screen)
//             if(selectedSeats.includes(index)){
//                 setSelectedSeats(selectedSeats.filter((i)=>i !==index))
//             }
//             else{
//                 setSelectedSeats((seats)=> [...seats,index])
//             }
   
//     }
//     return (

//         <div>

//             <h2 className="movie-color"> Movie in Chennai </h2>
//             <div  >
//                 <button className="lan" >Tamil</button>
//                 <button className="lan" >English</button>
//                 <button className="lan" >Telugu</button>
//                 <button className="lan">Malayalam</button>
//                 <button className="lan" >Hindi</button>
//                 <button className="lan">Japanese</button>
//             </div>

//             <div className="movie-selection">
//                 {MOVIE.map((movie) => (
//                     <div className="movie" key={movie.id} onClick={() => setSelectedMovie(movie)}>
//                         <img className="movie-poster" src={movie.image} alt={movie.title} />
//                         <div className="movie-title" >{movie.title}</div>
//                     </div>

//                 ))
//                 }
//             </div>
//             {selectedMovie && (
//                 <>
                   
//                     <h2>Choose your screen</h2>
//                     <div className="screen-selection">
//                         {
//                             SCREENS.map((screen) => {
//                                 return (
//                                     <div key={screen.id} 
//                                     className={`screen ${
//                                         screen?.id === selectedScreen?.id ? "selected" : ""
//                                     }  ${screen.seats.includes(1) ? "available" : ""}`}
//                                     >
                                     
//                                      <div className="screen-number">Screen {screen.id}</div>
//                                      <div className="screen-time">{screen.time}</div>
//                                      <div className="movie-title">{selectedMovie.title}</div>
//                                      <div className="screen-seats">
//                                       {/* index for finding the item */  }
//                                         {screen.seats.map((seat,index)=>{
//                                                 return(
//                                                     <div key={index}
//                                                     className={`seat ${
//                                                         seat ? "available" : 'unavailable'
//                                                     }${selectedSeats.includes(index) && 
//                                                         selectedScreen?.id === screen.id
//                                                         ? "selected"
//                                                         :""
//                                                     }
//                                                     ${selectedSeats.includes(index) ? "booked":"" }
//                                                     `}
//                                                     onClick={()=>{
//                                                         if(seat){
//                                                          handleSeatSelect(index,{
//                                                             ...screen,
//                                                             movie: selectedMovie
//                                                          })   
//                                                         }
//                                                     }}
//                                                     >
//                                                         <div className="seat-number">{index+1}</div>
                                                       
//                                                     </div>
//                                                 )
//                                             })
//                                         }
//                                      </div>
//                                     </div>
//                                 )
//                             })
//                         }
//                     </div>
//                 </>

//             )}
//         </div>
//     )
// }
import React, { useState } from "react";

const SCREENS = [
    {
                id: 1,
                time: "10.00Am",
                seats: [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0 ,1 ,0 ,1 ,1 ,0 ,1 ,0, 0 ,1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1,1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0 ,1 ,0 ,1 ,1 ,0 ,1 ,0, 0 ,1, 0,1 ]
            },
            {
                id: 2,
                time: "9.00Am",
                seats: [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0 ,1 ,0 ,1 ,1 ,0 ,1 ,0, 0 ,1, 0, 1, 1, 1, 1, 1, 1, 1]
            },
            {
                id: 3,
                time: "11.00Am",
                seats: [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0]
            },
            {
                id: 4,
                time: "1.00Am",
                seats: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1]
            },
            {
                id: 5,
                time: "12.00Am",
                seats: [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1,  0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1]
            },
];

const MOVIE = [
    {
                id: 1,
                title: "Demony colony 2",
                image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICAzNS43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00380018-vlvxmddfxg-portrait.jpg"
            },
            {
                id: 2,
                title: "Vaazhai",
                image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICAyMS42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408594-kxylmtxdpl-portrait.jpg"
            },
            {
                id: 3,
                title: "Thagalan",
                image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC8xMCAgNjAuNksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00343221-jhvvdffcwz-portrait.jpg"
            },
            {
                id: 4,
                title: "Kottukkali ",
                image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni4zLzEwICA0LjlLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408897-qqdbaknnxt-portrait.jpg"
            },
            {
                id: 5,
                title: "Sarkate ka Antank",
                image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgMjcyLjRLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00364249-khjjypdaat-portrait.jpg"
            },
            {
                id: 6,
                title: "Saripodha Sanivaram",
                image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4xLzEwICAzNy45SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00388631-qnhmahsruh-portrait.jpg"
            },
            {
                id: 7,
                title: "Saripodha Sanivaram",
                image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICA0My43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00399518-ygqqxuhyrb-portrait.jpg"
            },
            {
                id: 8,
                title: "GOAT",
                image: ""
            },
            
];

export default function MovieBooking() {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [selectedScreen, setSelectedScreen] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatSelect = (index, screen) => {
        if (screen?.id !== selectedScreen?.id) {
            setSelectedScreen(screen);
            setSelectedSeats([index]);
            return;
        }
        
        setSelectedScreen(screen);

        if (selectedSeats.includes(index)) {
            setSelectedSeats(selectedSeats.filter((i) => i !== index));
        } else {
            setSelectedSeats((seats) => [...seats, index]);
        }
    };

    return (
        <div>
            {/* <h2 className="movie-color"> Movie in Chennai </h2> */}
            <input
            type="text"
            placeholder="Search"
            className="text-edit"/>
            <div>
                <button className="lan">Tamil</button>
                <button className="lan">English</button>
                <button className="lan">Telugu</button>
                <button className="lan">Malayalam</button>
                <button className="lan">Hindi</button>
                <button className="lan">Japanese</button>
            </div>

            <div className="movie-selection">
                {MOVIE.map((movie) => (
                    <div className="movie" key={movie.id} onClick={() => setSelectedMovie(movie)}>
                        <img className="movie-poster" src={movie.image} alt={movie.title} />
                        <div className="movie-title">{movie.title}</div>
                    </div>
                ))}
            </div>
            {selectedMovie && (
                <>
                    <h2>Choose your screen</h2>
                    <div className="screen-selection">
                        {SCREENS.map((screen) => (
                            <div
                                key={screen.id}
                                className={`screen ${
                                    screen?.id === selectedScreen?.id ? "selected" : ""
                                } ${screen.seats.includes(1) ? "available" : ""}`}
                            >
                                <div className="screen-number">Screen {screen.id}</div>
                                <div className="screen-time">{screen.time}</div>
                                <div className="movie-title">{selectedMovie.title}</div>
                                <div className="screen-seats">
                                    {screen.seats.map((seat, index) => (
                                        <div
                                            key={index}
                                            className={`seat ${
                                                seat ? "available" : "unavailable"
                                            }${selectedSeats.includes(index) &&
                                                selectedScreen?.id === screen.id
                                                ? "selected"
                                                : ""
                                            } ${selectedSeats.includes(index) ? "booked" : ""}`}
                                            onClick={() => {
                                                if (seat) {
                                                    handleSeatSelect(index, {
                                                        ...screen,
                                                        movie: selectedMovie,
                                                    });
                                                }
                                            }}
                                        >
                                            <div className="seat-number">{index + 1}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
