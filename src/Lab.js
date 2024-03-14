import { 
  useState, 
  useEffect, 
  useRef, 
  createContext, 
  useContext 
} from "react";

export default function Lab() {
  return <Snippet />
}

function Snippet() {
  const country = {
    capitalCity: "서울",
    name: "대한민국",
    population: 5000,
    language: "Korean",
    isG7: false,
  }

  return (
    <>
      <h1>Q. JSX</h1>
      <h3>{country.name}</h3>
      <ul>
        <li>수도: {country.capitalCity}</li>
        <li>인구: 약 {country.population.toLocaleString()}만 명</li>
        <li>언어: {country.language}</li>
        <li>G7 여부: {country.isG7 ? "예" : "아니오"}</li>
      </ul>
    </>  
  )
}
