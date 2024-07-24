
import Image from "next/image";

const Explore = () => {
  return (
    <main>
      <div className="content text-center mt-8">
        <h1 className="font-bold text-7xl text-wrap purple_gradient text-center">Pick Your Learning Topic!</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 text-center mt-20">

        <div>
        <Image 
            src="/Images/math-cat.png"
            width={600}
            height={600}
            alt="portrait of young student with book"
            className="cursor-pointer"
        />
        <h2 className ="font-bold">Math</h2>
        </div>

        <div>
        <Image 
            src="/Images/portrait-young-student-with-book-education-day.png"
            width={600}
            height={600}
            alt="portrait of young student with book"
            className="cursor-pointer"
        />
        <h2 className="font-bold">Reading</h2>
        </div>

        <div>
        <Image 
            src="/Images/general-cat.png"
            width={600}
            height={600}
            alt="portrait of young student with book"
            className="cursor-pointer"
        />
        <h2 className="font-bold">General Knowlegde</h2>
        </div>

        </div> 
      </div>
    </main>
  );
}

export default Explore;
