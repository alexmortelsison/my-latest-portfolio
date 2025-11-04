import Image from "next/image";
import React from "react";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen w-full">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-48 space-x-4 space-y-8">
          <div>
            <video src={"bg.mp4"} height={400} width={400} />
            <p className="font-overcamebold">Apesnobiety</p>
          </div>
          <div>
            <Image
              alt="1"
              src={"/1.jpg"}
              height={400}
              width={400}
              className="h-42 w-300 object-cover hover:scale-200 duration-400"
            />
            <p className="font-overcamebold">Forest House</p>
          </div>
          <div>
            <Image
              alt="1"
              src={"/2.jpg"}
              height={400}
              width={400}
              className="h-42 w-300 object-cover hover:scale-200 duration-200"
            />
            <p className="font-overcamebold">AU Shop Hiroshima</p>
          </div>
          <div>
            <Image
              alt="1"
              src={"/3.jpg"}
              height={400}
              width={400}
              className="h-42 w-300 object-cover hover:scale-200 duration-200"
            />
            <p className="font-overcamebold">Japanese House</p>
          </div>
          <div>
            <Image
              alt="1"
              src={"/4.jpeg"}
              height={400}
              width={400}
              className="h-42 w-300 object-cover hover:scale-200 duration-200"
            />
            <p className="font-overcamebold">Living Room</p>
          </div>
          <div>
            <Image
              alt="1"
              src={"/5.jpeg"}
              height={400}
              width={400}
              className="h-42 w-300 object-cover hover:scale-200 duration-200"
            />
            <p className="font-overcamebold">Contemporary</p>
          </div>
          <div>
            <Image
              alt="1"
              src={"/6.jpeg"}
              height={400}
              width={400}
              className="h-42 w-300 object-cover hover:scale-200 duration-200"
            />
            <p className="font-overcamebold">Traditional</p>
          </div>
          <div>
            <Image
              alt="1"
              src={"/7.jpeg"}
              height={400}
              width={400}
              className="h-42 w-300 object-cover hover:scale-200 duration-200"
            />
            <p className="font-overcamebold">Coffee Shop</p>
          </div>
          <div>
            <Image
              alt="1"
              src={"/13.jpeg"}
              height={400}
              width={400}
              className="h-42 w-300 object-cover hover:scale-200 duration-200"
            />
            <p className="font-overcamebold">Hiroshima Restaurant</p>
          </div>
          <div>
            <Image
              alt="1"
              src={"/8.jpeg"}
              height={400}
              width={400}
              className="h-42 w-300 object-cover hover:scale-200 duration-200"
            />
            <p className="font-overcamebold">Mood Shot</p>
          </div>
          <div>
            <Image
              alt="1"
              src={"/9.jpeg"}
              height={400}
              width={400}
              className="h-42 w-300 object-cover hover:scale-200 duration-200"
            />
            <p className="font-overcamebold">Mood Interior</p>
          </div>
          <div>
            <Image
              alt="1"
              src={"/12.jpeg"}
              height={400}
              width={400}
              className="h-42 w-300 object-cover hover:scale-200 duration-200"
            />
            <p className="font-overcamebold">Exhibit Booth</p>
          </div>
        </div>
      </div>
    </div>
  );
}
