import React from "react";
import Card from './Card'
const Heroes = () => {
  return (
    <div className="App__body">

    <div className="Content">
        <div className="BotSearchPage">
            <a target="_blank" className="Button Button--outline Button--lg BotSearchPage__docs-button" href="https://docs.forta.network/en/latest/getting-started/" rel="noopener noreferrer">
                <div className="Button__content">Build your own bot</div>
                <div className="Button__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                </div>
            </a>
            <h1 className="BotSearchPage__title">Detection <span className="color-purple">Bots</span></h1>
            <p className="BotSearchPage__description">Forta comprises a decentralized network of independent bots that scan all transactions and block-by-block state changes for threats and anomalies. When an issue is detected, scan bots send alerts to subscribers, which enables them to take action.</p>
            <form className="BotSearchPage__form">
                <div className="TextField TextField--light BotSearchPage__form__input">
                    <div className="TextField__container">
                        <input placeholder="Search by Bot Name / Bot ID / Developer ID" name="search" className="TextField__input" value="" style={{paddingLeft: "20px", paddingRight: "20px"}}/>
                    </div>
                </div>
                <button type="submit" className="Button Button--primary Button--lg Button--icon BotSearchPage__form__submit">
                    <div className="Button__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
                        </svg>
                    </div>
                </button>
            </form>
            <div className="ChipContainer ChipContainer--row BotSearchPage__chips">
                <button className="Chip Chip--default Chip--active">
                    <div className="Chip__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                    </div>
                    Popular bots
                </button>
                <button className="Chip Chip--default">
                    <div className="Chip__icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 15H7.5V13.3333H2.5V15ZM2.5 5V6.66667H17.5V5H2.5ZM2.5 10.8333H12.5V9.16667H2.5V10.8333Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    Recent bots
                </button>
                <button className="Chip Chip--outline">Discover Protocols<div className="Chip__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                </div>
                </button>
            </div>
        </div>
    </div>
    <Card/>

</div>
    )
};

export default Heroes;
