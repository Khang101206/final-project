import React from 'react';
import './detail.styles.css';

const Detail = () => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="hotel-imgs">
          <img src='https://static.leonardo-hotels.com/image/leonardo-royal-london-tower-bridge-king_5294a6aac01b1def22279b8f47549c8b_2048x1251_desktop_2.jpeg' alt="Hotel"/>
          <div className='hotel-img'>
          <img src='https://static.leonardo-hotels.com/image/leonardo-royal-london-tower-bridge-king_5294a6aac01b1def22279b8f47549c8b_2048x1251_desktop_2.jpeg' alt="Hotel"/>
          <img src='https://static.leonardo-hotels.com/image/leonardo-royal-london-tower-bridge-king_5294a6aac01b1def22279b8f47549c8b_2048x1251_desktop_2.jpeg' alt="Hotel"/>
          <img src='https://static.leonardo-hotels.com/image/leonardo-royal-london-tower-bridge-king_5294a6aac01b1def22279b8f47549c8b_2048x1251_desktop_2.jpeg' alt="Hotel"/>
          <img src='https://static.leonardo-hotels.com/image/leonardo-royal-london-tower-bridge-king_5294a6aac01b1def22279b8f47549c8b_2048x1251_desktop_2.jpeg' alt="Hotel"/>
          </div>
        </div>
        <div className="hotel-content">
          <h2 className="hotel-title">Seoul hotel</h2>
          <a href="#" className="hotel-link">return</a>
          <div className="hotel-rating">
          </div>

          <div className="hotel-price">
            <p className="last-price">Old Price: <span>$257.00</span></p>
            <p className="new-price">New Price: <span>$249.00 (5%)</span></p>
          </div>

          <div className="hotel-detail">
            <h2>about this room:</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
            <ul>
              <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADsklEQVR4nO2cS6hNURjHf5eQAQclA24hlIiRUh6J6c0jymNg7D0gMUAmunkUMTbxyERukUcZKOV9ubp5DZiIPBIJcblZWqdFXOexzzl3n/Xte/6/+ib3nr33t7/fWmvvs/baB4QQQgghhBBCCCGEEEIIIYQQQghRKYOAjcBN4DPgFNRSg8+hlhuAgZXKGA3clwDSaoQdocaJe4ZkkPqIcC9pT9mknkG9huf1SYTckhDqJeRGEiGfJIR6CfG1Lku9klGQr4GEYKsxSAjxJUgI8QsvIcQvtoQQv8ASQvyiSgjxC5kJId/DxNlRYDOwApgNTAHGA83AcCD31/Fy4W/N4TNTwjZ+2y1hXx1h330tr1SE/ATOAiuBIaTHEGAVcC4cM6t5pSrkITCH+jMXeJTBvFIV4g88jHgMB55kKK/UhSwkPoszlFfqQoYSn1yG8kpdiBVcRvKSkMhICOohJnAasmy1RKs07JBlFQkxhoQ0opBu4DywpMZk/erIicA8YBmwBtgBHASOAWeAy8A1oB14CjwH3veIHwVy/Fngcy+AZ8Bd4HrYdxtwHDgE7ATWAcuB+cBkYHCN5+j3cxL4moYQv1B4PzCmgoT6h6IvBXYDp0IxXlY5K+oixBvgNnAa2BOETQUGVFCHEcCu0DBqFtIF7ANGJpwuaAEOhNWPXwwU1KUUXeFZyOHQ4JLWZ3eBHpNYyJXQdUsxDtgeWlG3gUK5SOF7fGcoeLmaTQhDZmIhflzeCjQV+b8fW9dqDTClBHWGJ5PFHow1haeOvtZl8RfaYvP8O8K4GrtFuozEB6AVGFVhrUviba4G3ho4QZfR8DdF28KNTk2MBa4aOCHXR+IOMKlaGTOB1wZOwvWx8Le/CyqVsQj4ZiB510fje1hOlIgZeuuWekkp21P8ojBdvKnr8OW/yxWlzUB3dg0Wl4rJaDGQnGvQ8NMv/9FuIDHXoPGg58zILANJuQaPf5a+HjOQkGvwOPFbhu8q+gJIdCHvgH5eyHQDySjI18C7yP8EkwqCiRp4FxwxkIiCfA38E0guqiBYaRAXqPDlEgWp1uCxF/JKhcZKQ/MrcvhoIBEFfx75FlxspiDalLwQQghRNbqAY6oG0RNQICHOcEOInoACCXGGG0L0BBRIiDPcEKInoEBCnOGGED0BBb0jpDu8rjWtx695Niq5UIvWGl+ArXpDf2BRmL0xhOTXEImC1LLWreoNNUz1zm8u9poQURoJMYaEGENCjCEhxpAQY0iIMSQEW1Ql5BfMY5qDP/Uw3QAAAABJRU5ErkJggg=="/>Bed: <span>2</span></li>
              <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC6UlEQVR4nO2Zu2sUURSHv0SNL9SNiiSKjwghYuF/IMTCV6NgJzEiiVrZiKKgjXYR0hhtxEYEC11foKhYKGggiBI1gkIiJMKKGiE2osbNZuTCL2GzzMzOzszuzOJ8cJrJuef+DnvvuefeQEJCQkJClVIDbAQ6gXPALWAAGAHGgL+yMX0bkE8X0KGxJkYkLAEOALeBUcAKaKNKbj+wuBIJbANuAr9DEO9kv4A0sDVs8bOBNuB1GcU7WT+wF5gVNIktwNsIErAK7AOww08CjVqzVswsLW2e2A58iYFoy8G+A7uK7YULwGQMxFpFzGjskeYZLAIeBgic014ywQ8BrUATUA/MkdXrW6t8ejQmF2DeB9I+vR/6fYp/KlHL8M9y4LBi5Xzo6J/aN3dKHGjOkEtAC+HTAlwG/pSo6a4ZvAJ473HAPWAd5WcVcNXjfh3Kr2SrgWEX5xGtbTeWAruBbq3dIZtea1B/65av2TfFzrFPLrqGpX0G64GMjfN1IOUwUR2wD3gEZH2s76wSa1MsO1I6PwrHZqTZlg3A1zznMw6d6VzgGPA5QMWxE3bUISGj4Wye7zdpdWWTHE1bbsdOLRurTDbo0o50SJvR6Inp2pzHfOBihQ7MSR3O8zxq84w5J3orkIBVYC9UVUOhqcxLqZh9lIbAmCZyPMJExqUhFPZ4LK8TwHPgBLAZaAYWypr17aR8JjzEy2ruUGlz6YVMS3EeaCghXqMaR6dfO6c5y8JBm6pluuY1AWKu1YFaWLXMXGXlSN5kXWHcp3XgmSU39Ysfp0KYPdDu0lJ06qnIVLufsiF963RpedoVO1JM23Ia+OFhE5sG8pTGxIqVQJ+P0vpKeyQ2SWQCnBMZxYicGt0Y/SZyBaglJtQC13wkkbZ7CYkaU4ZvlHjPNq8rsaQOuO8hiccOLXqsMPeWJy5J9Kr3qgoWAM9skugLejGK6p9BL/OSeOPh1SS2pPQS+E4vilVNQ4ntfUJCQsJ/wD8f0vRIcd1zjwAAAABJRU5ErkJggg=="/>Wifi: <span>Yes</span></li>
              <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABD0lEQVR4nO3Wu0oDQRSH8R94QRFLCy9pvDyJ8ZFso6+htYoiNqKdXbAXS7UQbBQJqJWCoCwcYQlZzGYvFu4HpzkwfMyZGf5DQ8PvrOIQz3jDCdZUzAqe8NVXPSxWKd4P0SnmQ3YWvaMqxTt4wFyq1wrxi5pp/YV4CechPs6zsDvgooxSvbjttYlfY6e5pP+TbklnnNQn7rCN6TrF6bocRl4Wk2jjPuRbaqYd4tuio85KoAtcY6yvPxvr3ouKsxLoKvrJDtNsRP9GQbISaDN6yZmuYyakP2fcUVEQjMe4B02ni6m8kt0c0TcRO0/e70dcqM4o0oS9kCTjXSiSQHlZxmMZCTTq3+ogPnRNAjUYhm929685k2COQQAAAABJRU5ErkJggg=="/>Air condition: <span>Yes</span></li>
              <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxElEQVR4nO2WMQoCMRBF36rgCbyBhSBWXsDSxTto7zVs7Ky8gKV4BG9hYWNltk5to5GFLARBN2AmgtkHv8kUL4TPEGhIkRlQACZQFJD7iFVAaZWrj9gIpZZGbOwr6Dcv1AVGwBZ4xBS7LKXFbWAP7IC5c54BJ0lx52U2cWabmOKFM1vFEl+AnjM7SIozYAwM7CUq+sAtdquHwFm61S1gbVOW6QjcpVam/lAu0V2tkxObL1NLemL1q69PHlheSqc+4ob/4gmX8ZXt098+SQAAAABJRU5ErkJggg=="/>Private parking: <span>Yes</span></li>
              <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABKElEQVR4nO2YQU7CQBiFv5QFG+ECcAM5iC7hHKJrkdPoGbiA3Qgrww6WegNtgrsaklnoZMYW6oSf5n3JpEn7+v7M/DOvSUG0hy4wBV6AAngHrg37BhkAr0DpjTds+kZXLFSsacFUvlFu/yh2ZdA3ytIrtACG2PWN8ukVHBr3jeK3Pna/6UiOJoI6koZUe9nMGbHqG0WHHR32NLR+azVFE/nvlWvN1io1EdSRRii1KtBhPxalFvqOpKE1qbUCPtxYnYEvGXAPfAFzoFOhnTntQw3tXrOrqZ3V9P3FBXAJ3ABrr9Vr97t/BPQO0PYTaoPkgX26Ae6AbY3EOYU2j02kcC8+AuMfrdxfJ8CTe14Y0T6HeyJskym1UGqVSi1xRmRKLZRapVJLYItvSrQelvG4R4UAAAAASUVORK5CYII="/>Pool: <span>Yes</span></li>
            </ul>
          </div>

          <div className="purchase-info">
            <button type="button" className="btn">
              Book <i className="fas fa-shopping-cart"></i>
            </button>
            <button type="button" className="btn">Compare</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Detail;
