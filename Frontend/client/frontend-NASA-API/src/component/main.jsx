import React from "react";

export default function Main() {
  return (
    <div className="bg-gray-700 flex flex-col space-y-4 px-10 py-8">
      <h5 className="align-top animate-bounce text-6xl font-bold tracking-tight text-white dark:text-white text-center mb-2">
        Here are some Images captured from NASA Offical website....
      </h5>
      <div className="grid gap-8 laptop:grid-cols-4 tablet:grid-cols-1 grid-flow-col-2 justify-stretch">
        <div>
          <img className="hover:animate-shake animate-once " src="https://www.nasa.gov/wp-content/uploads/2024/05/hubble-hptau-wfc3-1-flat-finalok.jpg" alt="Space Image 1" />
          <p className="text-sm text-gray-300">This NASA Hubble Space Telescope image captures a triple-star star system.</p>
        </div>
        <div>
          <img className="hover:animate-shake animate-once " src="https://www.nasa.gov/wp-content/uploads/2024/04/hubble-ngc2217-potw2052a.jpg" alt="Space Image 2" />
          <p className="text-sm text-gray-300">The magnificent central bar of NGC 2217 (also known as AM 0619-271) shines bright in the constellation of Canis Major (The Greater Dog), in this image taken by the NASA/ESA Hubble Space Telescope. Roughly 65 million light-years from Earth, this barred spiral galaxy is a similar size to our Milky Way at 100,000 light-years across.</p>
        </div>
        <div>
          <img className="hover:animate-shake animate-once " src="https://www.nasa.gov/wp-content/uploads/2024/04/stsci-01hv4cg0eacm1mc07e10x19knx.png" alt="Space Image 3" />
          <p className="text-sm text-gray-300">Rising from turbulent waves of dust and gas is the Horsehead Nebula, otherwise known as Barnard 33, which resides roughly 1,300 light-years away. The NASA/ESA/CSA James Webb Space Telescope has captured the sharpest infrared images to date of one of the most distinctive objects in our skies, the Horsehead Nebula.</p>
        </div>
        
        <div>
          <img className="hover:animate-shake animate-once " src="https://www.nasa.gov/wp-content/uploads/2024/05/pia04234orig.jpg" alt="Space Image 4" />
          <p className="text-sm text-gray-300">NASA's Galaxy Evolution Explorer was launched on April 28, 2003. Its mission was to study the shape, brightness, size and distance of galaxies across 10 billion years of cosmic history.</p>
        </div>
        <div>
          <img className="hover:animate-shake animate-once " src="https://www.nasa.gov/wp-content/uploads/2024/04/53641212344-be1e94e20c-o.jpg" alt="Space Image 5" />
          <p className="text-sm text-gray-300">A total solar eclipse is seen in Dallas, Texas on Monday, April 8, 2024. A total solar eclipse swept across a narrow portion of the North American continent from Mexico’s Pacific coast to the Atlantic coast of Newfoundland, Canada.</p>
        </div>
        <div>
          <img className="hover:animate-shake animate-once " src="https://www.nasa.gov/wp-content/uploads/2024/04/8111969orig.jpg" alt="Space Image 6" />
          <p className="text-sm text-gray-300">The new era in space flight began on April 12, 1981. That is when the first Space Shuttle mission (STS-1) was launched. The Marshall Space Flight Center developed the propulsion system for the Space Shuttle. This photograph depicts the launch of the Space Shuttle Orbiter Columbia crewed with two astronauts, John Young and Robert Crippen.</p>
        </div>
        <div>
          <img className="hover:animate-shake animate-once " src="https://www.nasa.gov/wp-content/uploads/2024/03/101-ksc-69p-223orig.jpg" alt="Space Image 7" />
          <p className="text-sm text-gray-300">An Atlas-Centaur launched at 5:22 p.m. EST on March 27, 1969, to send Mariner 7 on its way to Mars. Mariner 7 joined its sister spacecraft, Mariner 6, on a journey that carried them within 2,000 miles of the red planet that summer. Mariner 6 was launched from Kennedy Space Center in Florida on Feb. 24 and investigated the Martian equatorial area while Mariner 7 concentrated on the south polar cap.</p>
        </div>
        <div>
          <img className="hover:animate-shake animate-once " src="https://www.nasa.gov/wp-content/uploads/2024/03/hubble-leda42160-potw2411a-1.jpg" alt="Space Image 8" />
          <p className="text-sm text-gray-300">This NASA/ESA Hubble Space Telescope image shows LEDA 42160, a galaxy about 52 million light-years from Earth in the constellation Virgo. The dwarf galaxy is one of many forcing its way through the comparatively dense gas in the massive Virgo cluster of galaxies. The pressure exerted by this intergalactic gas, known as ram pressure, has dramatic effects on star formation in LEDA 42160</p>
        </div>
        <div>
          <img className="hover:animate-shake animate-once " src="https://www.nasa.gov/wp-content/uploads/2024/03/gsfc-20171208-archive-e000760orig-stpatricksaurora-iotd.jpg" alt="Space Image 9" />
          <p className="text-sm text-gray-300">This majestic image of the dazzling green lights of the aurora borealis was captured on March 17, 2015, around 5:30 a.m. EDT in Donnelly Creek, Alaska.</p>
        </div>
        <div>
          <img className="hover:animate-shake animate-once " src="https://www.nasa.gov/wp-content/uploads/2024/02/s84-27018orig.jpg" alt="Space Image 10" />
          <p className="text-sm text-gray-300">Astronaut Bruce McCandless II approaches his maximum distance from the Earth-orbiting Space Shuttle Challenger in this 70mm frame photographed by his fellow crewmembers onboard the reusable vehicle. </p>
        </div>
        <div>
          <img className="hover:animate-shake animate-once " src="https://www.nasa.gov/wp-content/uploads/2024/01/nameraurora-vir-2023309-lrg.jpg" alt="Space Image 11" />
          <p className="text-sm text-gray-300">The Visible Infrared Imaging Radiometer Suite sensor on the NOAA-NASA Suomi NPP satellite captured this image of the aurora borealis, or northern lights, over western Canada on November 5, 2023.</p>
        </div>
        <div>
          <img className="hover:animate-shake animate-once " src="https://www.nasa.gov/wp-content/uploads/2024/01/ksc-20240130-ph-spx02-0003orig.jpg" alt="Space Image 12" />
          <p className="text-sm text-gray-300">A successful liftoff from Space Launch Complex 40 at Cape Canaveral Space Force Station in Florida as Northrop Grumman’s Cygnus spacecraft, atop a SpaceX Falcon 9 rocket, heads to the International Space Station for the 20th Northrop Grumman resupply mission on Tuesday, Jan. 30, 2024.</p>
        </div>
      </div>
    </div>
  );
}


