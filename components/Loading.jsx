export default function Loading() {
  return (
    <>
      <div className="loading">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
      <style jsx>{`
        .loading {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 11rem;
        }
        /*loading*/
        .lds-ripple {
          position: relative;
          width: 72px;
          height: 72px;
        }
        .lds-ripple div {
          position: absolute;
          border: 4px solid rgb(240, 240, 240);
          opacity: 1;
          border-radius: 50%;
          animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }
        .lds-ripple div:nth-child(2) {
          animation-delay: -0.5s;
        }
        @keyframes lds-ripple {
          0% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 1;
          }
          100% {
            top: 0px;
            left: 0px;
            width: 72px;
            height: 72px;
            opacity: 0;
          }
        }
        /*loading end */
      `}</style>
    </>
  );
}
