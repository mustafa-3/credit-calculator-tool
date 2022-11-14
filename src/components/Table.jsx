import React from "react";

const Table = ({ vade, tutar, kredi, faizOrani, toplam, taksit }) => {
  console.log(vade, tutar, kredi);
  return (
    <div>
      <table className="table mt-4">
        <tbody>
          <tr>
            <td className="fw-bold">Kredi miktarı</td>
            <td>{tutar}</td>
            <td className="fw-bold">Kredi tipi</td>
            <td>{kredi}</td>
          </tr>
          <tr>
            <td className="fw-bold">Vade</td>
            <td>{vade}</td>
            <td className="fw-bold">Faiz Oranı</td>
            <td>{faizOrani}</td>
          </tr>
          <tr>
            <td className="fw-bold">Toplam Tutar</td>
            <td>{toplam}</td>
            <td className="fw-bold">Taksit Tutarı</td>
            <td>{taksit}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
