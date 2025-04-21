// import React, { useState } from 'react';

// const TradeJournal = () => {
//   const [showJournalForm, setShowJournalForm] = useState(false);
//   const [journalEntries, setJournalEntries] = useState([]);
//   const [formData, setFormData] = useState({
//     symbol: '',
//     tradeType: 'long',
//     entryDate: '',
//     entryPrice: '',
//     exitDate: '',
//     exitPrice: '',
//     positionSize: '',
//     riskRewardRatio: '',
//     stopLoss: '',
//     takeProfit: '',
//     entryReason: '',
//     exitReason: '',
//     emotionalState: '',
//     marketConditions: '',
//     whatWentWell: '',
//     whatWentWrong: '',
//     lessonsLearned: '',
//     additionalNotes: ''
//   });

//   const handleOpenForm = () => {
//     setShowJournalForm(true);
//   };

//   const handleCloseForm = () => {
//     setShowJournalForm(false);
//     // Reset form data when closing
//     setFormData({
//       symbol: '',
//       tradeType: 'long',
//       entryDate: '',
//       entryPrice: '',
//       exitDate: '',
//       exitPrice: '',
//       positionSize: '',
//       riskRewardRatio: '',
//       stopLoss: '',
//       takeProfit: '',
//       entryReason: '',
//       exitReason: '',
//       emotionalState: '',
//       marketConditions: '',
//       whatWentWell: '',
//       whatWentWrong: '',
//       lessonsLearned: '',
//       additionalNotes: ''
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Calculate profit/loss
//     const entryPrice = parseFloat(formData.entryPrice);
//     const exitPrice = parseFloat(formData.exitPrice);
//     const positionSize = parseFloat(formData.positionSize);

//     let profitLoss = 0;
//     let profitLossPercentage = 0;

//     if (formData.tradeType === 'long') {
//       profitLoss = (exitPrice - entryPrice) * positionSize;
//       profitLossPercentage = ((exitPrice - entryPrice) / entryPrice) * 100;
//     } else {
//       profitLoss = (entryPrice - exitPrice) * positionSize;
//       profitLossPercentage = ((entryPrice - exitPrice) / entryPrice) * 100;
//     }

//     // Create a new journal entry with the form data and calculated values
//     const newEntry = {
//       ...formData,
//       id: Date.now(), // Simple unique ID based on timestamp
//       profitLoss,
//       profitLossPercentage,
//       date: new Date().toISOString()
//     };

//     // Add the new entry to the journal entries array
//     setJournalEntries([newEntry, ...journalEntries]);

//     // Close the form and reset form data
//     handleCloseForm();
//   };

//   return (
//     <div className="trade-journal-container">
//       <div className="journal-header">
//         <h1>Trade Journal</h1>
//         <p>Track your trades, analyze your performance, and improve your trading strategy</p>
//         <button className="add-entry-button" onClick={handleOpenForm}>
//           <i className="bi bi-plus-lg"></i> Add New Trade
//         </button>
//       </div>

//       {showJournalForm ? (
//         <div className="journal-form-overlay">
//           <div className="journal-form-container">
//             <div className="form-header">
//               <h2>New Trade Entry</h2>
//               <button className="close-button" onClick={handleCloseForm}>
//                 <i className="bi bi-x-lg"></i>
//               </button>
//             </div>

//             <form className="trade-form" onSubmit={handleSubmit}>
//               <div className="form-section">
//                 <h3>Trade Details</h3>

//                 <div className="form-row">
//                   <div className="form-group">
//                     <label htmlFor="symbol">Symbol/Pair</label>
//                     <input
//                       type="text"
//                       id="symbol"
//                       name="symbol"
//                       placeholder="e.g. AAPL, BTC/USD"
//                       value={formData.symbol}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="tradeType">Trade Type</label>
//                     <select
//                       id="tradeType"
//                       name="tradeType"
//                       value={formData.tradeType}
//                       onChange={handleInputChange}
//                       required
//                     >
//                       <option value="long">Long</option>
//                       <option value="short">Short</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="form-row">
//                   <div className="form-group">
//                     <label htmlFor="entryDate">Entry Date</label>
//                     <input
//                       type="date"
//                       id="entryDate"
//                       name="entryDate"
//                       value={formData.entryDate}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="entryPrice">Entry Price</label>
//                     <input
//                       type="number"
//                       id="entryPrice"
//                       name="entryPrice"
//                       step="0.0001"
//                       placeholder="Entry price"
//                       value={formData.entryPrice}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="form-row">
//                   <div className="form-group">
//                     <label htmlFor="exitDate">Exit Date</label>
//                     <input
//                       type="date"
//                       id="exitDate"
//                       name="exitDate"
//                       value={formData.exitDate}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="exitPrice">Exit Price</label>
//                     <input
//                       type="number"
//                       id="exitPrice"
//                       name="exitPrice"
//                       step="0.0001"
//                       placeholder="Exit price"
//                       value={formData.exitPrice}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="form-row">
//                   <div className="form-group">
//                     <label htmlFor="positionSize">Position Size</label>
//                     <input
//                       type="number"
//                       id="positionSize"
//                       name="positionSize"
//                       placeholder="Number of shares/contracts"
//                       value={formData.positionSize}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="riskRewardRatio">Risk/Reward Ratio</label>
//                     <input
//                       type="text"
//                       id="riskRewardRatio"
//                       name="riskRewardRatio"
//                       placeholder="e.g. 1:3"
//                       value={formData.riskRewardRatio}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                 </div>

//                 <div className="form-row">
//                   <div className="form-group">
//                     <label htmlFor="stopLoss">Stop Loss</label>
//                     <input
//                       type="number"
//                       id="stopLoss"
//                       name="stopLoss"
//                       step="0.0001"
//                       placeholder="Stop loss price"
//                       value={formData.stopLoss}
//                       onChange={handleInputChange}
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="takeProfit">Take Profit</label>
//                     <input
//                       type="number"
//                       id="takeProfit"
//                       name="takeProfit"
//                       step="0.0001"
//                       placeholder="Take profit price"
//                       value={formData.takeProfit}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="form-section">
//                 <h3>Trade Analysis</h3>

//                 <div className="form-group">
//                   <label htmlFor="entryReason">Entry Reason</label>
//                   <textarea
//                     id="entryReason"
//                     name="entryReason"
//                     placeholder="Why did you enter this trade? What setup or pattern did you see?"
//                     value={formData.entryReason}
//                     onChange={handleInputChange}
//                     required
//                     rows="3"
//                   ></textarea>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="exitReason">Exit Reason</label>
//                   <textarea
//                     id="exitReason"
//                     name="exitReason"
//                     placeholder="Why did you exit the trade? Was it at your target, stop loss, or a different reason?"
//                     value={formData.exitReason}
//                     onChange={handleInputChange}
//                     required
//                     rows="3"
//                   ></textarea>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="emotionalState">Emotional State</label>
//                   <textarea
//                     id="emotionalState"
//                     name="emotionalState"
//                     placeholder="How were you feeling before, during, and after the trade? Were emotions a factor in your decision-making?"
//                     value={formData.emotionalState}
//                     onChange={handleInputChange}
//                     rows="3"
//                   ></textarea>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="marketConditions">Market Conditions</label>
//                   <textarea
//                     id="marketConditions"
//                     name="marketConditions"
//                     placeholder="What were the overall market conditions? Bullish, bearish, high volatility, news events, etc."
//                     value={formData.marketConditions}
//                     onChange={handleInputChange}
//                     rows="3"
//                   ></textarea>
//                 </div>
//               </div>

//               <div className="form-section">
//                 <h3>Lessons & Reflections</h3>

//                 <div className="form-group">
//                   <label htmlFor="whatWentWell">What Went Well</label>
//                   <textarea
//                     id="whatWentWell"
//                     name="whatWentWell"
//                     placeholder="What aspects of the trade were executed well? What worked according to your plan?"
//                     value={formData.whatWentWell}
//                     onChange={handleInputChange}
//                     rows="3"
//                   ></textarea>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="whatWentWrong">What Went Wrong</label>
//                   <textarea
//                     id="whatWentWrong"
//                     name="whatWentWrong"
//                     placeholder="What mistakes were made? What could have been better executed?"
//                     value={formData.whatWentWrong}
//                     onChange={handleInputChange}
//                     rows="3"
//                   ></textarea>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="lessonsLearned">Lessons Learned</label>
//                   <textarea
//                     id="lessonsLearned"
//                     name="lessonsLearned"
//                     placeholder="What lessons can you take from this trade? How will you improve next time?"
//                     value={formData.lessonsLearned}
//                     onChange={handleInputChange}
//                     required
//                     rows="3"
//                   ></textarea>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="additionalNotes">Additional Notes</label>
//                   <textarea
//                     id="additionalNotes"
//                     name="additionalNotes"
//                     placeholder="Any other information you want to record about this trade"
//                     value={formData.additionalNotes}
//                     onChange={handleInputChange}
//                     rows="3"
//                   ></textarea>
//                 </div>
//               </div>

//               <div className="form-actions">
//                 <button type="button" className="cancel-button" onClick={handleCloseForm}>Cancel</button>
//                 <button type="submit" className="submit-button">Save Trade</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       ) : (
//         <div className="journal-entries-container">
//           {journalEntries.length === 0 ? (
//             <div className="no-entries">
//               <i className="bi bi-journal-text"></i>
//               <h2>No journal entries yet</h2>
//               <p>Start tracking your trades by clicking the "Add New Trade" button above.</p>
//             </div>
//           ) : (
//             <div className="entries-list">
//               {journalEntries.map(entry => (
//                 <div key={entry.id} className="journal-entry-card">
//                   <div className="entry-header">
//                     <div className="entry-symbol">{entry.symbol}</div>
//                     <div className={`entry-type ${entry.tradeType}`}>
//                       {entry.tradeType === 'long' ? 'LONG' : 'SHORT'}
//                     </div>
//                     <div className={`entry-result ${entry.profitLoss >= 0 ? 'profit' : 'loss'}`}>
//                       {entry.profitLoss >= 0 ? '+' : ''}{entry.profitLoss.toFixed(2)} ({entry.profitLossPercentage.toFixed(2)}%)
//                     </div>
//                   </div>
//                   <div className="entry-details">
//                     <div className="detail-item">
//                       <span className="detail-label">Entry:</span>
//                       <span className="detail-value">{entry.entryPrice} on {new Date(entry.entryDate).toLocaleDateString()}</span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Exit:</span>
//                       <span className="detail-value">{entry.exitPrice} on {new Date(entry.exitDate).toLocaleDateString()}</span>
//                     </div>
//                     <div className="detail-item">
//                       <span className="detail-label">Size:</span>
//                       <span className="detail-value">{entry.positionSize}</span>
//                     </div>
//                   </div>
//                   <div className="entry-lesson">
//                     <strong>Lesson:</strong> {entry.lessonsLearned.slice(0, 100)}{entry.lessonsLearned.length > 100 ? '...' : ''}
//                   </div>
//                   <button className="view-details-button">View Details</button>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TradeJournal;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const TradeJournal = () => {
//   const [showJournalForm, setShowJournalForm] = useState(false);
//   const [journalEntries, setJournalEntries] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [formData, setFormData] = useState({
//     symbol: "",
//     tradeType: "long",
//     entryDate: "",
//     entryPrice: "",
//     exitDate: "",
//     exitPrice: "",
//     positionSize: "",
//     riskRewardRatio: "",
//     stopLoss: "",
//     takeProfit: "",
//     entryReason: "",
//     exitReason: "",
//     emotionalState: "",
//     marketConditions: "",
//     whatWentWell: "",
//     whatWentWrong: "",
//     lessonsLearned: "",
//     additionalNotes: "",
//   });

//   const accessToken = localStorage.getItem("accessToken");
//   const API_BASE_URL = process.env.REACT_APP_API_URL;

//   const JOURNAL_API = `${API_BASE_URL}api/trade-journal/`;

//   useEffect(() => {
//     const fetchEntries = async () => {
//       try {
//         const res = await axios.get(JOURNAL_API, {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         });
//         setJournalEntries(res.data);
//       } catch (err) {
//         console.error("Error loading journal entries", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEntries();
//   }, []);

//   const handleOpenForm = () => {
//     setShowJournalForm(true);
//   };

//   const handleCloseForm = () => {
//     setShowJournalForm(false);
//     setFormData({
//       symbol: "",
//       tradeType: "long",
//       entryDate: "",
//       entryPrice: "",
//       exitDate: "",
//       exitPrice: "",
//       positionSize: "",
//       riskRewardRatio: "",
//       stopLoss: "",
//       takeProfit: "",
//       entryReason: "",
//       exitReason: "",
//       emotionalState: "",
//       marketConditions: "",
//       whatWentWell: "",
//       whatWentWrong: "",
//       lessonsLearned: "",
//       additionalNotes: "",
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const TradeJournal = () => {
//   const [showJournalForm, setShowJournalForm] = useState(false);
//   const [journalEntries, setJournalEntries] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [formData, setFormData] = useState({
//     symbol: "",
//     tradeType: "long",
//     entryDate: "",
//     entryPrice: "",
//     exitDate: "",
//     exitPrice: "",
//     positionSize: "",
//     riskRewardRatio: "",
//     stopLoss: "",
//     takeProfit: "",
//     entryReason: "",
//     exitReason: "",
//     emotionalState: "",
//     marketConditions: "",
//     whatWentWell: "",
//     whatWentWrong: "",
//     lessonsLearned: "",
//     additionalNotes: "",
//   });

//   const accessToken = localStorage.getItem("accessToken");
//   const API_BASE_URL = process.env.REACT_APP_API_URL;

//   const JOURNAL_API = `${API_BASE_URL}api/trade-journal/`;

//   useEffect(() => {
//     const fetchEntries = async () => {
//       try {
//         const res = await axios.get(JOURNAL_API, {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         });
//         setJournalEntries(res.data);
//       } catch (err) {
//         console.error("Error loading journal entries", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEntries();
//   }, []);

//   const handleOpenForm = () => {
//     setShowJournalForm(true);
//   };

//   const handleCloseForm = () => {
//     setShowJournalForm(false);
//     setFormData({
//       symbol: "",
//       tradeType: "long",
//       entryDate: "",
//       entryPrice: "",
//       exitDate: "",
//       exitPrice: "",
//       positionSize: "",
//       riskRewardRatio: "",
//       stopLoss: "",
//       takeProfit: "",
//       entryReason: "",
//       exitReason: "",
//       emotionalState: "",
//       marketConditions: "",
//       whatWentWell: "",
//       whatWentWrong: "",
//       lessonsLearned: "",
//       additionalNotes: "",
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const entryPrice = parseFloat(formData.entryPrice);
//     const exitPrice = parseFloat(formData.exitPrice);
//     const positionSize = parseFloat(formData.positionSize);

//     let profitLoss = 0;
//     let profitLossPercentage = 0;

//     if (formData.tradeType === "long") {
//       profitLoss = (exitPrice - entryPrice) * positionSize;
//       profitLossPercentage = ((exitPrice - entryPrice) / entryPrice) * 100;
//     } else {
//       profitLoss = (entryPrice - exitPrice) * positionSize;
//       profitLossPercentage = ((entryPrice - exitPrice) / entryPrice) * 100;
//     }

//     const payload = {
//       ...formData,
//       entryPrice,
//       exitPrice,
//       positionSize,
//       stopLoss: parseFloat(formData.stopLoss || 0),
//       takeProfit: parseFloat(formData.takeProfit || 0),
//     };

//     try {
//       const res = await axios.post(JOURNAL_API, payload, {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });

//       setJournalEntries((prev) => [res.data, ...prev]);
//       handleCloseForm();
//     } catch (error) {
//       console.error("Error saving entry:", error);
//       alert("Failed to save journal entry.");
//     }
//   };

// export default TradeJournal;

import React, { useState, useEffect } from "react";
import axios from "axios";

const TradeJournal = () => {
  const [showJournalForm, setShowJournalForm] = useState(false);
  const [journalEntries, setJournalEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    symbol: "",
    trade_type: "long",
    entry_date: "",
    entry_price: "",
    exit_date: "",
    exit_price: "",
    position_size: "",
    risk_reward_ratio: "",
    stop_loss: "",
    take_profit: "",
    entry_reason: "",
    exit_reason: "",
    emotional_state: "",
    market_conditions: "",
    what_went_well: "",
    what_went_wrong: "",
    lessons_learned: "",
    additional_notes: "",
  });

  const accessToken = localStorage.getItem("accessToken");
  const API_BASE_URL = process.env.REACT_APP_API_URL;
  const JOURNAL_API = `${API_BASE_URL}api/trade-journal/`;

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const res = await axios.get(JOURNAL_API, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setJournalEntries(res.data);
      } catch (err) {
        console.error("Error loading journal entries", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEntries();
  }, []);

  const handleOpenForm = () => setShowJournalForm(true);

  const handleCloseForm = () => {
    setShowJournalForm(false);
    setFormData({
      symbol: "",
      trade_type: "long",
      entry_date: "",
      entry_price: "",
      exit_date: "",
      exit_price: "",
      position_size: "",
      risk_reward_ratio: "",
      stop_loss: "",
      take_profit: "",
      entry_reason: "",
      exit_reason: "",
      emotional_state: "",
      market_conditions: "",
      what_went_well: "",
      what_went_wrong: "",
      lessons_learned: "",
      additional_notes: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      entry_price: parseFloat(formData.entry_price),
      exit_price: parseFloat(formData.exit_price),
      position_size: parseFloat(formData.position_size),
      stop_loss: formData.stop_loss ? parseFloat(formData.stop_loss) : null,
      take_profit: formData.take_profit
        ? parseFloat(formData.take_profit)
        : null,
    };

    try {
      const res = await axios.post(JOURNAL_API, payload, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setJournalEntries((prev) => [res.data, ...prev]);
      handleCloseForm();
    } catch (error) {
      console.error("❌ Error saving entry:", error.response?.data || error);
      alert("Failed to save journal entry.");
    }
  };

  const sortedEntries = [...journalEntries].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  return (
    <div className="trade-journal-container">
      <div className="journal-header">
        <h1>Trade Journal</h1>
        <p>
          Track your trades, analyze your performance, and improve your trading
          strategy
        </p>
        <button className="add-entry-button" onClick={handleOpenForm}>
          <i className="bi bi-plus-lg"></i> Add New Trade
        </button>
      </div>

      {showJournalForm && (
        <div className="journal-form-overlay">
          <div className="journal-form-container">
            <div className="form-header">
              <h2>New Trade Entry</h2>
              <button className="close-button" onClick={handleCloseForm}>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>

            <form className="trade-form" onSubmit={handleSubmit}>
              <div className="form-section">
                <h3>Trade Details</h3>
                <div className="form-row">
                  <input
                    name="symbol"
                    placeholder="Symbol"
                    value={formData.symbol}
                    onChange={handleInputChange}
                    required
                  />
                  <select
                    name="trade_type"
                    value={formData.trade_type}
                    onChange={handleInputChange}
                  >
                    <option value="long">Long</option>
                    <option value="short">Short</option>
                  </select>
                </div>
                <div className="form-row">
                  <input
                    type="date"
                    name="entry_date"
                    value={formData.entry_date}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="number"
                    name="entry_price"
                    placeholder="Entry Price"
                    value={formData.entry_price}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    type="date"
                    name="exit_date"
                    value={formData.exit_date}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="number"
                    name="exit_price"
                    placeholder="Exit Price"
                    value={formData.exit_price}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    name="position_size"
                    placeholder="Position Size"
                    value={formData.position_size}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    name="risk_reward_ratio"
                    placeholder="Risk/Reward Ratio"
                    value={formData.risk_reward_ratio}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-row">
                  <input
                    name="stop_loss"
                    placeholder="Stop Loss"
                    value={formData.stop_loss}
                    onChange={handleInputChange}
                  />
                  <input
                    name="take_profit"
                    placeholder="Take Profit"
                    value={formData.take_profit}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-section">
                <h3>Trade Analysis</h3>
                <textarea
                  name="entry_reason"
                  placeholder="Entry Reason"
                  value={formData.entry_reason}
                  onChange={handleInputChange}
                  required
                />
                <textarea
                  name="exit_reason"
                  placeholder="Exit Reason"
                  value={formData.exit_reason}
                  onChange={handleInputChange}
                  required
                />
                <textarea
                  name="emotional_state"
                  placeholder="Emotional State"
                  value={formData.emotional_state}
                  onChange={handleInputChange}
                />
                <textarea
                  name="market_conditions"
                  placeholder="Market Conditions"
                  value={formData.market_conditions}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-section">
                <h3>Lessons & Reflections</h3>
                <textarea
                  name="what_went_well"
                  placeholder="What Went Well"
                  value={formData.what_went_well}
                  onChange={handleInputChange}
                />
                <textarea
                  name="what_went_wrong"
                  placeholder="What Went Wrong"
                  value={formData.what_went_wrong}
                  onChange={handleInputChange}
                />
                <textarea
                  name="lessons_learned"
                  placeholder="Lessons Learned"
                  value={formData.lessons_learned}
                  onChange={handleInputChange}
                  required
                />
                <textarea
                  name="additional_notes"
                  placeholder="Additional Notes"
                  value={formData.additional_notes}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="cancel-button"
                  onClick={handleCloseForm}
                >
                  Cancel
                </button>
                <button type="submit" className="submit-button">
                  Save Trade
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {loading ? (
        <p>Loading entries...</p>
      ) : journalEntries.length === 0 ? (
        <div className="no-entries">
          <h2>No journal entries yet</h2>
          <p>Start by clicking the "Add New Trade" button above.</p>
        </div>
      ) : (
        <div className="entries-list">
          {sortedEntries.map((entry) => (
            <div key={entry.id} className="journal-entry-card">
              <div className="entry-header">
                <div className="entry-symbol">{entry.symbol}</div>
                <div className={`entry-type ${entry.trade_type}`}>
                  {entry.trade_type.toUpperCase()}
                </div>
                <div className="entry-result">
                  Entry: {entry.entry_price} | Exit: {entry.exit_price}
                </div>
              </div>
              <div className="entry-details">
                <div>
                  Date: {new Date(entry.created_at).toLocaleDateString()}
                </div>
                <div>Position: {entry.position_size}</div>
              </div>
              <div className="entry-lesson">
                <strong>Lesson:</strong> {entry.lessons_learned?.slice(0, 100)}
                {entry.lessons_learned?.length > 100 ? "..." : ""}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TradeJournal;
