import "./Mid.css";

export default function MId() {
  return (
    <div className="mid">
      <div className="midContainer">
        <div className="title">
          <h1>Get Your Favourite Food Recipes Here</h1>
          <p>Detailed Insturstions on how to cook your delicious food!</p>
        </div>
        <div className="form">
          <form>
            <input type="text" placeholder="Search Recipe" />
            <button type="button">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}
