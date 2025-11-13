import React from 'react';

const recognitionData = [
    { title: "Master Florets", description: "Recognized for outstanding overall performance", color: "#0A988B" },
    { title: "Gold Medalist", description: "Top academic achievement in competitive environment", color: "#0A988B" },
    { title: "Science Quiz Winner", description: "Demonstrated exceptional problem-solving abilities", color: "#1C3645" },
    { title: "Runner Up", description: "Consistent high performance across competitions", color: "#1C3645" },
];

const Recognition: React.FC = () => {
    return (
        <section className="bg-[#061722] p-8 md:p-12 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Academic Excellence & Recognition</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="flex justify-center items-center">
                    <img
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZzDU4u1dhssUehTdBXNw-1n_DgFa-RqIAE34c-BZar8pGlez4TP9nUYtcjeqmwKYxWmPTbHaTN9Y1hZ1YgZY0PIfzqZRPGxZICAsWfnnCwCGonGiXSq5_HkAgkrgoQlcfXFFx1TVPBNATa4bq9RWrnY3tJAzeywu0aR3sZYMwyqYUYFXVRKimy5NFC-ua/s16000/WhatsApp%20Image%202025-11-13%20at%205.55.28%20AM.jpeg"
                        alt="Academic achievement"
                        className="rounded-lg shadow-2xl w-full max-w-md h-auto object-cover"
                    />
                </div>
                <div className="space-y-6">
                    {recognitionData.map((item, index) => (
                        <div key={index} className="flex items-stretch">
                            <div className="w-2 mr-4 rounded-full" style={{backgroundColor: item.color}}></div>
                            <div className="bg-[#1C3645] p-4 rounded-r-lg flex-1">
                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                <p className="text-[#CAD6DE] mt-1">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Recognition;
