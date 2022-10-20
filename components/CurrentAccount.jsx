import { useData } from "../context/data";

export const CurrentAccount = () => {
  const { lastMonthUserData, lastMonthData } = useData();

  return (
    <>
      <main>
        <div className="title">{lastMonthData.name}</div>
        <div className="top">
          <div>
            <p className="label">Cargo fijo</p>
            <p>{lastMonthData.cargoFijo}</p>
          </div>
          <div>
            <p className="label">Pasaje</p>
            <p>1200</p>
          </div>
          <div>
            <p className="label">Valor m3</p>
            <p>{lastMonthData.valorUnitarioM3}</p>
          </div>
          <div>
            <p className="label">Multa</p>
            <p>{String(lastMonthData.multa)}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="row">
            <p></p>
            <p className="header">consumo (m3)</p>
            <p className="header">pago</p>
          </div>
          {Object.keys(lastMonthUserData).map((key) => {
            return (
              <div key={key} className="row">
                <p className="header">{key}</p>
                <p>{lastMonthUserData[key].consumo}</p>
                <p>{lastMonthUserData[key].pago}</p>
              </div>
            );
          })}
        </div>
      </main>
      <style jsx>{`
        main {
          margin: 4rem 0.5rem;
          padding: 3px;
          border-radius: 0.25rem;
          background-color: rgb(229 231 235);
          display: flex;
          flex-direction: column;
          text-align: center;
        }
        .title {
          padding-top: 0.5rem;
          font-size: 1.1rem;
          font-weight: 500;
        }
        .top {
          display: flex;
          padding: 0.5rem;
          font-size: 0.8rem;
        }
        .top div {
          background-color: white;
          border-radius: 0.25rem;
          width: 100%;
          margin: 0.5rem;
        }

        .top p {
          padding: 0.5rem;
        }

        .label {
          background-color: #f5f5f5;
        }
        .bottom {
          text-align: right;
        }

        .row {
          display: flex;
        }

        .row p {
          background-color: white;
          padding: 0.25rem;
          width: 100%;
          margin: 1px;
        }

        .header {
          text-align: center;
          font-weight: 500;
        }
      `}</style>
    </>
  );
};
{
  /* <div className="row">
            <p>user</p>
            <p>consumo (m3)</p>
            <p>pago</p>
          </div> */
}
