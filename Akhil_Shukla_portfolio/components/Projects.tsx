
import React, { useState, useEffect, useRef } from 'react';

const mediconnectScreenshots = [
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8zUXCVCyO7fbb1WIU4vljej-3brlLr__E2r38-D5s1D8T6cElhqSBeIRguDvLV76e5xAvxLOcsbaq_w7ZeDCjYYLEtNK3wFKVqJUDs4iuZTC28EG-9eOjcerPUw5xhbWLLxZUoIm3MoS2LglJTDwB-OeFB1fcIcptwhI7SFbj3L_wURPLQOmHnLZ5_cXK/s16000/Role-Based%20Registration%20Form.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhomLlDqfk7BZKkJ5Ij3ZHuK2AZFWTVbmAza5krqNmj4TefVKQ9Gzq-1SU7Zh4JFiK53MAdOlxuXU6ZlP_4JpPQ0rgtin1SOKj2lQz7kkEBdMbT4f1ujpzRUY2hNDjU4t8JwUMHTX6qmX2w_A6yNijjBGckhwmqpARC8PGEcH9Sfjk4nxxoNbvxtZVtT6wc/s16000/Doctor's%20Admin%20Panel.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjg8SYvFMvybar8DfGje3pXLD3623ivP1HYsxml1YHMX3oTek8bINSnFSop6Q0_7amAZnoGApAq9-KMFYBai31VfWRTXzBJHhg3JI3up5HF-uc5C-SY1VgeAfB7SxO6g2ZWB4BWmYoYJ28W_SP1cWy0df0StJ9C64P28bg0gGqytt70W1MJYsNgxYV9JsWW/s16000/Patient%20Dashboard%20&%20Doctor%20Search.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKJLix70aFwILb-P4EFkjXrOUWX5862_RCa58ZblhqoVDH0-WMXQFHry67WNQpx55Z4X1adfdmlB9SbPtPlRwQ43s5ASkYHMumfLLDts6pnGtYC1fBxD6nOZPqjo1T7EBWRswnow0_ld1Tw4Q_nkBfMT7L85j_sJ-rkqM3EGh41Mwrt_3BBRtmPHqV6T8F/s16000/MediConnect%20Plus%20-%20Project%20Landing%20Page.jpg"
];

const dynamictutorialtScreenshots = [
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzzHkzQ1vUQ4Ey8ShqTaiusiQkus0AZ58hM_Acv3CeObBzhOZpmGPZtTAySR_9VXUsxSMVX8PyKpkdEmN8NbVKVln5rDhBPdixHyzrjKfPeUK5wGoUeLI39PUG_XOqaAcJ3DrBVcMGqgo95PQfVgsF2t-T-dFsL2R4WuwgNcaoq94b4GtD4voD2hramDZT/s16000/Screenshot%202025-11-13%20042151.png",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSVVwpoTQXrGGv15dK_YcNBUkT9pz8WL0QLFcyOOOm1yqOyVe_-3LtL28WgfUQm-0ycB4kmrI8Jj1TCu5dvVzZgekvAqnVX-kUKGluPBKtJOY-hNI9gwHdoVL0DYavqnI2DaCRd0v3SeNTpA1O-SrXdQ5WCl3iI3FBICxhFF9AI6VQYvGMHRAmQwEh858L/s16000/Screenshot%202025-11-13%20042133.png",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsnDp4dbUi7yipK0q7jb6jEY_sDH8rFQr3D0GpIPjiLXf2glrT28IW9P3uynF-bHh3J5cU-bMEmnwQTpschV2My0QuFAFQHximAtWU6vGLvyrYrB3UrYGjvDh3_hWcqQG9Bqzjsmvch5tSxL_S7vD5tM8ZbFfnFnTQCUbMXS5BlJGFqVj_unPQ-nP2Hk_W/s16000/Screenshot%202025-11-13%20042108.png",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4AduQuFY_0jQJ2lz8Nc8MAs6mpv2d_fkhGPkaoY9Fhe0YukkfKPqg2wNEFcCZsj-Pk2ID8O0cN6QXJ8PoxKS-LM73BpgqvekhVVBNjSMKE1VNS_s2ey0XXCwiv0UEWQRn-6PXesFmbyOSuk14Z6XV6wTVN89WphIjhW0eKcpY8iw3YEbCQ1o2LHFFPNc6/s16000/Screenshot%202025-11-13%20042043.png"
];

const locationBasedMatching = [
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXX1Waz-TZcTUBcmRlZsyvPQ7vcnmL5cMzBLgRUS644X49htKOj6x2Fbf8xbPH3O8gLWvES3QTdGpb7yvgkCHxD7KXL84Xgf_vH3G4Xd0YnBOoeNEv9LKn9sOtOMiqWMp44qp7BUnzLLMjP3LpFqBXE5OUsnM-H7cN55bc4ZPNGuSNOCHMEpheE08LQ7Fy/s320/WhatsApp%20Image%202025-11-13%20at%204.56.19%20AM%20(2).jpeg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEht20EZIa5DGjS6TLQkC41UThRyBozCbvmT2xIMaNkGIHDynfnvGeqPMIQqnnk40FZnqimk3KVG1fWmPQIk6B1kiYsYAdN4-74jZ1zGFTQZ4AOgj_ZP6Og8TBzHs2KiLpAd3Q2T-APff7NObaUOUDYXMc7gH7-MpJkYots4WAoleqJ3OerdVPA09Y8BhA7E/s320/WhatsApp%20Image%202025-11-13%20at%204.56.19%20AM%20(1).jpeg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXkOuka_22ipWdNgGNcE-hyo4gMPBhd5I3c5OS_nDQkUXYvdNYggGcB1Yqya7A0HNXZIxFiR9tBm5RmooORfeGyVUSdf1Vqg1k-0QSsEO26bI_QQAt1dQi33JLOVeD-rbDZba8CzO80LigWGJ_oHS44Hqic5rKQFRZQWu_9viGd4rNMRHzfPDYd3NpGsKY/s320/WhatsApp%20Image%202025-11-13%20at%204.56.19%20AM.jpeg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOkYY-dIW3hcq5JBwMud2josNIvwb-u67uxGkzfez7G48YJCAK6M83ApGGmQFO0RObIIQvwOL9OeSMJ3QQ5RqeCKFrCNtwN_lrSueJxxEejsjo7kS3GXfYyf32CNbrcqPL_a3HTkFBuvT_YfJLJfN-4kjagAIvjYcalxCmEhVWZNEY-CRXoOhBEJhuEApr/s320/WhatsApp%20Image%202025-11-13%20at%204.56.18%20AM.jpeg"
];

const projectsData = [
  {
    screenshots: mediconnectScreenshots,
    title: "MediConnect Plus",
    description: "Built a complex, scalable healthcare application demonstrating advanced MERN stack capabilities and real-world problem-solving.",
    link: "https://github.com/akhil2508/mediconnect_plus"
  },
  {
    screenshots: dynamictutorialtScreenshots,
    title: "Dynamic Tutorial Platform",
    description: "Full-stack educational platform serving thousands of users with seamless tutor-student matching and live database management.",
    link: "http://www.dynamictutorial.in"
  },
  {
    screenshots: locationBasedMatching,
    title: "Location-Based Matching",
    description: "Innovative Google Maps API integration for intelligent geographic pairing of students and tutors.",
    link: null
  }
];

const ArrowLeft = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
);

const ArrowRight = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
);


const Lightbox: React.FC<{ images: string[], selectedIndex: number, onClose: () => void }> = ({ images, selectedIndex, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(selectedIndex);

    const goToPrevious = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft') goToPrevious();
        if (e.key === 'ArrowRight') goToNext();
        if (e.key === 'Escape') onClose();
      };
      
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [currentIndex]);


    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center" onClick={onClose}>
        <div className="relative w-full h-full max-w-4xl max-h-4/5" onClick={(e) => e.stopPropagation()}>
          <button onClick={onClose} className="absolute -top-10 right-0 text-white text-4xl">&times;</button>
          
          <div className="absolute top-1/2 -translate-y-1/2 left-4 text-3xl rounded-full p-2 bg-black/50 text-white cursor-pointer" onClick={goToPrevious}>
              <ArrowLeft />
          </div>
          
          <img src={images[currentIndex]} alt={`Screenshot ${currentIndex + 1}`} className="w-full h-full object-contain" />

          <div className="absolute top-1/2 -translate-y-1/2 right-4 text-3xl rounded-full p-2 bg-black/50 text-white cursor-pointer" onClick={goToNext}>
               <ArrowRight />
          </div>
        </div>
      </div>
    );
};


const Carousel: React.FC<{ images: string[], onImageClick: (index: number) => void }> = ({ images, onImageClick }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef<number | null>(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = window.setTimeout(
            () =>
                setCurrentIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ),
            3000
        );

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [currentIndex, images.length]);

    const goToPrevious = (e: React.MouseEvent) => {
        e.stopPropagation();
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="w-full h-56 object-cover relative group cursor-pointer" onClick={() => onImageClick(currentIndex)}>
            <div
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
                className="w-full h-full bg-center bg-cover duration-500 rounded-t-lg"
            ></div>
            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-2 text-2xl rounded-full p-1 bg-black/40 text-white cursor-pointer" onClick={goToPrevious}>
                <ArrowLeft />
            </div>
            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-2 text-2xl rounded-full p-1 bg-black/40 text-white cursor-pointer" onClick={goToNext}>
                 <ArrowRight />
            </div>
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={(e) => {
                            e.stopPropagation();
                            setCurrentIndex(slideIndex);
                        }}
                        className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${currentIndex === slideIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);


  const handleImageClick = (index: number, images: string[]) => {
      setSelectedImageIndex(index);
      setLightboxImages(images);
      setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
      setLightboxOpen(false);
      setLightboxImages([]);
  };

  return (
    <>
      <section className="bg-[#1C3645] p-8 md:p-12 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Key Projects & Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-[#061722] rounded-lg overflow-hidden shadow-lg flex flex-col">
              {/* FIX: Removed conditional rendering and dead code that caused a TypeScript error because 'imgSrc' does not exist on the project object. All projects in the data source have screenshots, so the Carousel is always appropriate. */}
              {project.screenshots ? (
                  <Carousel images={project.screenshots} onImageClick={(imageIndex) => handleImageClick(imageIndex, project.screenshots!)} />
              ) : null}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0dc8b7] transition-colors duration-300">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="text-[#CAD6DE] flex-grow">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {lightboxOpen && (
        <Lightbox images={lightboxImages} selectedIndex={selectedImageIndex} onClose={handleCloseLightbox} />
      )}
    </>
  );
};

export default Projects;
