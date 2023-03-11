import Link from "next/link";
import LatestVideos from "../components/LatestVideos";

const HomePage = () => {
  return (
    <div>
      <div className="bg-[url('https://media.istockphoto.com/id/1037573870/photo/technology-network.jpg?s=612x612&w=0&k=20&c=uL0X96qh_7Rh4jkaF0EDG2Fikk0BAl3bws7HfymuGSo=')] h-[80vh] -z-50">
        <div className="text-white flex flex-col items-center justify-center pt-52">
          <p className="font-serif">
            Our effort is to make you learn the technology in Practical way.
            Best Video Courses in HINDI, These courses are totally free of cost.
          </p>
          <p>Thousands of people learn from these courses daily.</p>
          <div className="pt-20 space-x-10 flex flex-col lg:flex-row">
            <Link href="/premiumcourses" className="bg-red-500 p-4">
              <button className="animate-bounce">PREMIUM COURSES</button>
            </Link>
            <Link href="/courses" className="p-4 bg-green-500">
              <button className="animate-bounce">TOP FREE COURSES</button>
            </Link>
          </div>
        </div>
      </div>

      {/* course */}

      <div>
        <div>
          <h3 className="text-2xl text-center">LATEST TUTORIALS</h3>
        </div>

        <div className=" max-w-7xl mx-auto items-center justify-center ">
          <div className="grid  lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-2 border-2 ">
            <LatestVideos
              img="https://i.ytimg.com/vi/m-NGiQlEsMA/hqdefault.jpg"
              title="Sending Attachment with email using Java and Gmail in simple way | Hindi"
              description="In this video, we will be learning how to send ..."
            />
            <LatestVideos
              img="https://i.ytimg.com/vi/m-NGiQlEsMA/hqdefault.jpg"
              title="Sending Attachment with email using Java and Gmail in simple way | Hindi"
              description="In this video, we will be learning how to send ..."
            />
            <LatestVideos
              img="https://i.ytimg.com/vi/m-NGiQlEsMA/hqdefault.jpg"
              title="Sending Attachment with email using Java and Gmail in simple way | Hindi"
              description="In this video, we will be learning how to send ..."
            />
            <LatestVideos
              img="https://i.ytimg.com/vi/m-NGiQlEsMA/hqdefault.jpg"
              title="Sending Attachment with email using Java and Gmail in simple way | Hindi"
              description="In this video, we will be learning how to send ..."
            />
            <LatestVideos
              img="https://i.ytimg.com/vi/m-NGiQlEsMA/hqdefault.jpg"
              title="Sending Attachment with email using Java and Gmail in simple way | Hindi"
              description="In this video, we will be learning how to send ..."
            />
            <LatestVideos
              img="https://i.ytimg.com/vi/m-NGiQlEsMA/hqdefault.jpg"
              title="Sending Attachment with email using Java and Gmail in simple way | Hindi"
              description="In this video, we will be learning how to send ..."
            />
            <LatestVideos
              img="https://i.ytimg.com/vi/m-NGiQlEsMA/hqdefault.jpg"
              title="Sending Attachment with email using Java and Gmail in simple way | Hindi"
              description="In this video, we will be learning how to send ..."
            />
            <LatestVideos
              img="https://i.ytimg.com/vi/m-NGiQlEsMA/hqdefault.jpg"
              title="Sending Attachment with email using Java and Gmail in simple way | Hindi"
              description="In this video, we will be learning how to send ..."
            />
            <LatestVideos
              img="https://i.ytimg.com/vi/m-NGiQlEsMA/hqdefault.jpg"
              title="Sending Attachment with email using Java and Gmail in simple way | Hindi"
              description="In this video, we will be learning how to send ..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
