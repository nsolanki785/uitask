import Image from "next/image";
import Layout from "@/components/layout";
import { blackbackground } from "../../public/black-flower-card-ai-generated.jpg";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const testMonialdetails = [
    {
      imgurl: "/download.jpg",
      title: "Ease of doing business.",
      details:
        "it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      name: "John doe",
    },
    {
      imgurl: "/download.jpg",
      title: "Profitability from day one.",
      details:
        "it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      name: "John doe",
    },
    {
      imgurl: "/download.jpg",
      title: "Lubigen support is un-matched",
      details:
        "it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      name: "John doe",
    },
  ];

  return (
    <>
      <Layout>
        <div className="my-20 ">
          <div className="bg-black min-h-[100vh] relative">
            <div
              style={{
                background: `url("/black-flower-card-ai-generated.jpg")`,
                width: "100%",
                height: "100vh",
              }}
              className="flex flex-col justify-center "
            >
              <div className="text-white px-40">
                <div className="font-bold text-2xl">LUBIGEN</div>
                <h4 className="mt-9 font-bold text-5xl">New generation oil</h4>
                <div className="mt-9 text-base w-96">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal
                  </p>
                </div>

                <div className="flex mt-16  ">
                  <div className="w-4 h-4 bg-white rounded-full mr-2"></div>
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-2"></div>
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-2"></div>
                  <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className=" absolute right-32 top-50 h-[100vh] ">
              <img width="900px" src="/engine.png" />
            </div>
            <div className="md:container md:mx-auto relative">
              <div className="">
                <div className="mx-16  w-1/2 h-[400px] bg-gray-50 flex flex-col justify-center items-center">
                  <div className="">
                    <div className="mb-3">3p</div>
                    <div className="font-bold text-[20px]">
                      Your engine is in safe hands
                    </div>
                    <h1 className="font-bold text-[30px]">With Lubigen</h1>

                    <p className="w-80 text-[16px] mt-7 mb-7 text-[15px]">
                      Get the PDF copy of our product brochure with the
                      available products at lubigen for free here.Lubigen
                      Lubricants brings world class technological insights to
                      its products, offering you the best formulations for your
                      vehicle.
                    </p>
                  </div>
                </div>
                <div className="py-10 mx-16 items-center w-1/2 h-[150vh] items-center   bg-yellow-400  ">
                  <div className="py-10 flex justify-center divide-y divide-black  	">
                    <div className="font-bold text-[30px] me-10">01</div>
                    <div>
                      <h1 className="font-bold text-[30px]">With Lubigen</h1>
                      <p className="w-80 text-[16px] mt-7 mb-7 text-[15px]">
                        Get the PDF copy of our product brochure with the
                        available products at lubigen for free here.Lubigen
                        Lubricants brings world class technological insights to
                        its products, offering you the best formulations for
                        your vehicle.
                      </p>
                    </div>
                  </div>
                  <div className="py-10 flex justify-center 	">
                    <div className="font-bold text-[30px] me-10">02</div>
                    <div>
                      <h1 className="font-bold text-[30px]">With Lubigen</h1>
                      <p className="w-80 text-[16px] mt-7 mb-7 text-[15px]">
                        Get the PDF copy of our product brochure with the
                        available products at lubigen for free here.Lubigen
                        Lubricants brings world class technological insights to
                        its products, offering you the best formulations for
                        your vehicle.
                      </p>
                    </div>
                  </div>
                  <div className="py-10 flex justify-center 	">
                    <div className="font-bold text-[30px] me-10">03</div>
                    <div>
                      <h1 className="font-bold text-[30px]">With Lubigen</h1>
                      <p className="w-80 text-[16px] mt-7 mb-7 text-[15px]">
                        Get the PDF copy of our product brochure with the
                        available products at lubigen for free here.Lubigen
                        Lubricants brings world class technological insights to
                        its products, offering you the best formulations for
                        your vehicle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-20 py-10 md:container md:mx-auto grid grid-cols-2 gap-2">
            <div className=" mt-5 mb-5  ">
              <h1 className="fond-bold text-5xl">Multiple your savings</h1>
            </div>
            <div className="col-span-1 row-span-2">gdfdf</div>
            <div className="mt-5 mb-5">
              <div className="bg-yellow-300 p-1 w-12"></div>
              <h1 className="mt-2 mb-2 font-bold text-2xl">
                Extend Engine Life
              </h1>
              <p className="w-72 text-[12px]">
                Get the PDF copy of our product brochure with the available
                products at lubigen for free here.Lubigen Lubricants brings
                world class technological insights to its products, offering you
                the best formulations for your vehicle.
              </p>
            </div>
            <div className="mt-5 mb-5">
              <div className="bg-yellow-300 p-1 w-12"></div>
              <h1 className="mt-2 mb-2 font-bold text-2xl">Improve mileage</h1>
              <p className="w-72 text-[12px]">
                Get the PDF copy of our product brochure with the available
                products at lubigen for free here.Lubigen Lubricants brings
                world class technological insights to its products, offering you
                the best formulations for your vehicle.
              </p>
            </div>
            <div className="mt-5 mb-5">
              <div className="bg-yellow-300 p-1 w-12"></div>
              <h1 className="mt-2 mb-2 font-bold text-2xl">Price guarantee</h1>
              <p className="w-72 text-[12px]">
                Get the PDF copy of our product brochure with the available
                products at lubigen for free here.Lubigen Lubricants brings
                world class technological insights to its products, offering you
                the best formulations for your vehicle.
              </p>
            </div>
          </div>
          {/* Third Section */}
          <div>
            <div>
              {" "}
              <img src="/2001.i123.005..engine oil advertising realistic.jpg" />{" "}
            </div>
            <div className="py-10 flex justify-center   items-center bg-blue-900 text-white text-center px-10">
              <div className="w-[70%]">
                <h1 className="mt-7 mb-7 text-6xl">
                  Explore Our Product Range
                </h1>
                <p className="mt-7 mb-7 text-[15px]">
                  Get the PDF copy of our product brochure with the available
                  products at lubigen for free here.Lubigen Lubricants brings
                  world class technological insights to its products, offering
                  you the best formulations for your vehicle.
                </p>
                <button className="mt-7 mb-7 text-black bg-white ps-10 pe-10 cursor-pointer pt-2 pb-2 font-bold   ">
                  Explore More
                </button>
              </div>
            </div>
          </div>

          {/* {Forth Section} */}
          <div className="relative w-[100%] h-[100%]">
            <div className="px-10 py-5">
              <div className="font-bold text-[20px]">
                Your engine is in safe hands
              </div>
              <h1 className="font-bold text-[30px]">With Lubigen</h1>

              <p className="w-[60%] text-[16px] mt-7 mb-7 text-[15px]">
                Get the PDF copy of our product brochure with the available
                products at lubigen for free here.Lubigen Lubricants brings
                world class technological insights to its products, offering you
                the best formulations for your vehicle.
              </p>
            </div>

            <div className="px-10 py-5">
              <div className="font-bold text-[20px]">
                Your engine is in safe hands
              </div>
              <h1 className="font-bold text-[30px]">With Lubigen</h1>

              <p className="w-[30%] text-[16px] mt-7 mb-7 text-[15px]">
                Get the PDF copy of our product brochure with the available
                products at lubigen for free here.Lubigen Lubricants brings
                world class technological insights to its products, offering you
                the best formulations for your vehicle.
              </p>
            </div>
            <div className="px-10 py-5">
              <div className="font-bold text-[20px]">
                Your engine is in safe hands
              </div>
              <h1 className="font-bold text-[30px]">With Lubigen</h1>

              <p className="w-80 text-[16px] mt-7 mb-7 text-[15px]">
                Get the PDF copy of our product brochure with the available
                products at lubigen for free here.Lubigen Lubricants brings
                world class technological insights to its products, offering you
                the best formulations for your vehicle.
              </p>
            </div>

            <div className="w-[70%] h-[70%]   absolute  right-0 bottom-0">
              <img
                className="rounded-image	 w-[100%] h-[100%] "
                src="/2001.i123.005..engine oil advertising realistic.jpg"
                alt="img not found"
              />
            </div>
          </div>

          {/* {Fiveth section} */}
          <div className="bg-slate-100 py-10">
            <div className="items-center  text-center">
              <div className="font-bold text-[30px] font-bold">Testimonial</div>
              <h1 className="font-bold text-5xl">People believe in us</h1>
            </div>
            <div className="px-10 mt-16 mb-16">
              <div className="grid grid-cols-1 gap-3  md:grid-cols-3">
                {testMonialdetails &&
                  testMonialdetails.map((item) => {
                    return (
                      <>
                        <div class="py-5 px-3 mx-auto max-w-sm bg-white ">
                          <div class="p-5">
                            <div className="mt-3 mb-3">
                              <img
                                class="w-20 rounded-full"
                                src={item.imgurl}
                                alt=""
                              />
                            </div>
                            <div className="w-48 mt-3 mb-3">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {item.title}
                              </h5>
                            </div>
                            <p class="mb-3 font-normal ">{item.details}</p>
                            <div class=" font-bold">{item.name}</div>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>

            <div className="px-20 mt-5 mb-5 grid grid-cols-1 gap-2  md:grid-cols-2">
              <div>
                <h1 className="font-bold text-5xl">
                  We Work with the Best partners{" "}
                </h1>
                <p className="w-80 text-[16px] mt-7 mb-7 text-[15px]">
                  it is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum
                </p>
                <button className="w-40 p-2 bg-yellow-300	 text-center text-black">
                  Read More
                </button>
              </div>

              <div className="mt-3 grid grid-cols-1 gap-2  md:grid-cols-2 px-3 ">
                <div>Classic icon</div>
                <div>Sunshine icon</div>
                <div>Your Couch icon</div>
                <div>Outdoors icon</div>
                <div>Design Studio icon</div>
                <div>Vintage icon</div>
              </div>
            </div>
          </div>

          <div className=" mb-5 grid grid-cols-1 gap-0  md:grid-cols-3">
            <div className="col-span-2 px-16 py-20 flex flex-col justify-center bg-yellow-400">
              <h1 className="font-bold text-3xl">Become a dealer </h1>
              <p className=" text-[16px] w-[500px] mt-7 mb-7 text-[15px]">
                it is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum
              </p>
              <button className="w-40 p-2 bg-gray-900	 text-center text-white">
                Become a dealer
              </button>
            </div>
            <div className="col-span-1 w-full h-full">
              <img
                width="100%"
                height="100%"
                src="/download.jpg"
                alt="not found"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
