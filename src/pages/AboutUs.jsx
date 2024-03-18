import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-2 py-3 mt-[84px] min-h-[90vh] flex items-center">
      <div className="w-full h-full flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-[50%] max-h-[500px] flex items-center">
          <img
            className="w-full max-h-[500px] object-cover rounded-md shadow-md"
            src="https://images.pexels.com/photos/6001507/pexels-photo-6001507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="w-full md:w-[50%] flex flex-col bg-white rounded-md shadow-md px-3 py-5">
          <Link to="/">
            <p className=" text-primary-200 font-bold text-2xl mb-5">Gaganda</p>
          </Link>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            veniam illum quibusdam nam. Repellendus reprehenderit totam
            reiciendis voluptates culpa neque repellat minus, provident ipsam
            esse ipsa suscipit saepe in magni fugiat consectetur nam nulla
            molestias dicta hic beatae dolorum maiores mollitia. Facere eveniet
            consectetur vel id delectus error alias aspernatur. Consequuntur,
            illum reprehenderit repellat quos non, deleniti adipisci recusandae
            alias dignissimos nostrum cumque totam temporibus quibusdam hic id.
            Tempore at autem consectetur dolore culpa necessitatibus ad vitae,
            cum porro facere ullam vero iusto tenetur placeat ut eos
            exercitationem dolorum sit dolor assumenda iure unde laboriosam qui
            accusamus? Esse, a! Ducimus?
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
