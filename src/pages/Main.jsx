import React, { useState } from "react";
import Table from "../components/Table";

const Main = () => {
  const [vade, setVade] = useState("");
  const [tutar, setTutar] = useState("");
  const [kredi, setKredi] = useState("");
  let faizOrani = "";
  if (kredi === "Konut Kredisi") {
    faizOrani = 1.29;
  } else if (kredi === "İhtiyac Kredisi") {
    faizOrani = 1.99;
  } else if (kredi === "Arac Kredisi") {
    faizOrani = 1.79;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const toplam = Math.round(tutar * Math.pow((100 + faizOrani) / 100, vade));
  const taksit = Math.round(toplam / vade) || 1;

  return (
    <div>
      <h1 className="text-center">Kredi Hesaplama Aracı</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Kredi" className="form-label">
            Kredi
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setKredi(e.target.value)}
          >
            <option defaultValue>Seciniz</option>
            <option value="Konut Kredisi">Konut Kredisi</option>
            <option value="İhtiyac Kredisi">İhtiyac Kredisi</option>
            <option value="Arac Kredisi">Arac Kredisi</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Vade
          </label>
          <input
            type="number"
            className="form-control"
            id="Vade"
            onChange={(e) => setVade(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Tutar
          </label>
          <input
            type="number"
            className="form-control"
            id="Tutar"
            onChange={(e) => setTutar(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Hesapla
        </button>
      </form>
      <Table
        vade={vade}
        tutar={tutar}
        kredi={kredi}
        faizOrani={faizOrani}
        toplam={toplam}
        taksit={taksit}
      />
    </div>
  );
};

export default Main;
