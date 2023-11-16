import React, { useState } from "react";
import { Link } from "react-router-dom";

const SchoolSelection: React.FC = () => {
  const [selectedSchool, setSelectedSchool] = useState<string>("");

  const schools = [
    "용인대학교",
    "안양대학교",
    "연성대학교",
    "인하공업전문대학교",
    "동아방송예술대학교",
    "여주대학교",
    "동남보건대학교",
    "계원예술대학교",
    "성결대학교",
    "한경대학교",
  ];

  const handleSchoolSelect = (schoolName: string) => {
    setSelectedSchool(schoolName);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">학교를 선택해주세요</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {schools.map((school, index) => (
          <button
            key={index}
            onClick={() => handleSchoolSelect(school)}
            className={`px-4 py-2 rounded-lg border ${
              selectedSchool === school ? "bg-blue-500 text-white" : "bg-white"
            }`}
          >
            {school}
          </button>
        ))}
      </div>
      {selectedSchool && (
        <Link to="/register">
          <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg">
            다음 단계로 진행하기
          </button>
        </Link>
      )}
    </div>
  );
};

export default SchoolSelection;
