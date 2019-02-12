/* APP-Java Script file, Bhavna Pulliahgari - 300931671, 02/12/2019 */
"use strict";

//IIFE
(function()
{
    let mylocalVar = 0;
    function Start()
    {
        console.log(`App started...${mylocalVar}`);
    }

    window.addEventListener("load", Start);
})();   