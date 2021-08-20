import * as React from "react";
import { StaticImage  } from "gatsby-plugin-image";
const about = () => {
    return ( 
        <>
        <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div class="flex-shrink-0">
                <img className="h-12 w-12" src="../images/icon.png" alt="ChitChat Logo" />
                <StaticImage class="h-12 w-12" height = {50} width = {50} src = "../images/icon.png" alt = "icon"></StaticImage>
            </div>
            <div>
                <div class="text-xl font-medium text-black">ChitChat</div>
                <p class="text-gray-500">You have a new message!</p>
  </div>
</div>
</>
       
     );
}

export default about;