import React from 'react'
import calligraphy from '../imgs/calligraphy.png';

const Nav = () => {
  return (


<nav class="bg-white border-gray-200 dark:bg-gray-900 max-h-20 ">
  <div class="flex flex-wrap align-center justify-between  pt-4 pb-4 text-white pl-4 pr-4 text-2xl text-bold">
    <div class="flex flex-row gap-1 items-center">
        <img src={calligraphy} class="h-12 w-14"/>
        <div>ReportGenMk1</div>
    </div>
    <div></div>
  </div>
</nav>

  )
}

export default Nav