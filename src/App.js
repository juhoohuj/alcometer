import "./App.css";
import { useState } from "react";

function Alcometer() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState(0);
  const [bloodLevel, setBloodLevel] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - (burning * time);
    const finalResult = gramsLeft / (weight * gender)

    if (gender == 0) {
      setBloodLevel("Choose gender")
      return
    }
    
    if (finalResult > 0) {
      setBloodLevel(finalResult.toFixed(2))
    }
    else {
      setBloodLevel(0)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="Alcometer">
        <h1>Calculating alcohol blood level</h1>
        <label for="weight">Weight</label>
        <input
          id="weight"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <br />
        <label for="bottles">Bottles</label>
        <select
          name="bottles"
          id="bottles"
          onChange={(e) => setBottles(e.target.value)}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">6</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
        </select>
        <br />
        <label for="time">Time</label>
        <select name="time" id="time" onChange={(e) => setTime(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <br />
        <label>Gender</label>
        <label for="male">Male</label>
        <input type="radio"id="male"name="gender"value="0.7"onChange={(e) => setGender(e.target.value)} />
        <label for="female">Female</label>
        <input type="radio" id="female" name="gender" value="0.6" onChange={(e) => setGender(e.target.value)} />
        <br />
        <button>Calculate</button> <br />
        <span>{bloodLevel}</span>
      </div>
    </form>
  );
}

export default Alcometer;
