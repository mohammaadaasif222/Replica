import React from "react";


export default function Card() {
  let a = "https://cryptologos.cc/logos/avalanche-avax-logo.png?v=026";
  let b = "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=026";
  let c = "https://cryptologos.cc/logos/unus-sed-leo-leo-logo.png?v=026";
  let d = "https://cryptologos.cc/logos/optimism-ethereum-op-logo.png?v=026";
  let l = "https://cryptologos.cc/logos/polygon-matic-logo.png?v=026";
  let f = "https://cryptologos.cc/logos/fantom-ftm-logo.png?v=026";
  let g = "https://cryptologos.cc/logos/arbitrum-arb-logo.png?v=026";

  let ids = [
    {
      id: "0xe8527df509859e531e58ba4154e9157eb6d9b2da202516a66ab120deabd3f9f6",
      title: "attack-simulation-bot",
      descr: "Large Balance Decrease - Optimism Gateway V2 Bridge",
      alert: "10000+",
    },
    {
      id: "0x0b241032ca430d9c02eaa6a52d217bbff046f0d1b3f3d2aa928e42a97150ec91",
      title: "malicious-smart-contract-ml-v3",
      descr: "Malicious Smart Contract Detection Bot V3",
      alert: "0",
    },
    {
      id: "0xe39e45ab19bb1c9a30887e157a21393680d336232263c96b326f68fa57a29723",
      title: "blocksec-bot",
      descr: "No description provided yet",
      alert: "1000+",
    },
    {
      id: "0x1d646c4045189991fdfd24a66b192a294158b839a6ec121d740474bdacb3ab23",
      title: "Scam Detector Feed",
      descr: "No description provided yet",
      alert: "10000+",
    },
    {
      id: "0xbdb84cba815103a9a72e66643fb4ff84f03f7c9a4faa1c6bb03d53c7115ddc4d",
      title: "Large Balance Decrease - Optimism Gateway",
      descr:
        "The bot detects the deployment of smart contracts that contain exploit functions",
      alert: "0",
    },
    {
      id: "0x55636f5577694c83b84b0687eb77863850c50bd9f6072686c8463a0cbc5566e0",
      title: "forta-ice-phishing-starter-kit",
      descr:
        "Provides real-time intelligence on scammers engaged in over 10 unique Provides real-time i",
      alert: "1000+",
    },
    {
      id: "0xe4a8660b5d79c0c64ac6bfd3b9871b77c98eaaa464aa555c00635e9d8b33f77f",
      title: "sentiment-emotion-analysis-with-BERT",
      descr: "Provides real-time intelligence on scammers engaged in over ",
      alert: "0",
    },
    {
      id: "0x8badbf2ad65abc3df5b1d9cc388e419d9255ef999fb69aac6bf395646cf01c14",
      title: "asset-drained",
      descr: "No description provided yet",
      alert: "0",
    },
    {
      id: "0x186f424224eac9f0dc178e32d1af7be39506333783eec9463edd247dc8df8058",
      title: "Funding Laundering Detector",
      descr: "Large Balance Decrease - Optimism Gateway V2 Bridge",
      alert: "10000+",
    },
    {
      id: "0x5474812f32fa8206c178864bb7f95f737ab9cdb1e4125af2e86ad8dd8c5fbf31",
      title: "Smart Price Changes Agent",
      descr: "This bot detects if an account gains high number of approvals",
      alert: "0",
    },
  ];

  return (
    <>
      <div className="container-fluid mt-3  ">
        <div className="row">
          <div className="col">
            <div className="row d-flex">
              {ids.map((e) => {
                console.log(e.id);
                return (
                  <>
                    <div className="col-lg-6 ">
                      <div className="card mb-4 p-4 ml-lg-4 mr-lg-4 ">
                        <div className="row">
                          <div className="col">
                            <div className="card-body">
                              <div className="d-flex">
                                <p className="paraId mt-1">{e.id}</p>
                                <button className="btn btn-outline-none">
                                  {" "}
                                  <i class="bi bi-files "></i>
                                </button>
                                <button className="gnrl rounded-pill btn text-center">
                                  General Data
                                </button>
                              </div>

                              <div className="row">
                                <div className="col mt-4">
                                  <div className="col ">
                                    <h4 className="title"> {e.title}</h4>
                                  </div>
                                  <div className="col">
                                    <div className=" d-flex">
                                      <img src={a} alt="" className="imgs" />
                                      <img src={b} alt="" className="imgs" />
                                      <img src={c} alt="" className="imgs" />
                                      <img src={d} alt="" className="imgs" />
                                      <img src={l} alt="" className="imgs" />
                                      <img src={f} alt="" className="imgs" />
                                      <img src={g} alt="" className="imgs" />
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col">
                                      <p className="mt-3">{e.descr}</p>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-4">
                                      <label>Developer:</label>
                                      <div className="d-flex">
                                        <p className="paraId ">{e.id}</p>
                                        <button className="btn">
                                          <i class="bi bi-files btn "></i>
                                        </button>
                                      </div>
                                    </div>
                                    <div className="col-4">
                                      <label>ALERTs:</label>
                                      <p>{e.alert}</p>
                                    </div>
                                    <div className="col-4">
                                      <label>STATUS:</label>
                                      <div className="d-flex">
                                        <div className="greens mt-2 "></div>
                                        &nbsp;<p>Enabled</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-5">
          <div className="d-none .d-lg-block .d-xl-none">
            ©️ 2023 Forta Foundation
          </div>
          <div>Discord-Terms of Service-Privacy Policy</div>
        </div>
      </div>
    </>
  );
}
