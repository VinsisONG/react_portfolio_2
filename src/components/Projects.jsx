import { useState } from "react";
import { content } from "../Content";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};
Modal.setAppElement("#root");

const Projects = () => {
  const { Projects } = content;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  function openModal(project) {
    setSelectedProject(project);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          />
          <Swiper
            pagination={{ clickable: true }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src={content.image} alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <button
                    onClick={() => openModal(content)}
                    className="font-bold text-gray self-end "
                  >
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Modal for project details */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
      >
        {selectedProject && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img className="h-10" src={selectedProject.image} alt="..." />
              <h6>{selectedProject.title}</h6>
            </div>
            <p className="font-Poppins text-sm leading-6">
              {selectedProject.description}
            </p>
            <div className="flex justify-end mt-4">
              <button onClick={closeModal} className="btn">
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
