import React, { useState } from 'react';

const TradeJournal = () => {
  const [showJournalForm, setShowJournalForm] = useState(false);
  const [journalEntries, setJournalEntries] = useState([]);
  const [formData, setFormData] = useState({
    symbol: '',
    tradeType: 'long',
    entryDate: '',
    entryPrice: '',
    exitDate: '',
    exitPrice: '',
    positionSize: '',
    riskRewardRatio: '',
    stopLoss: '',
    takeProfit: '',
    entryReason: '',
    exitReason: '',
    emotionalState: '',
    marketConditions: '',
    whatWentWell: '',
    whatWentWrong: '',
    lessonsLearned: '',
    additionalNotes: ''
  });

  const handleOpenForm = () => {
    setShowJournalForm(true);
  };

  const handleCloseForm = () => {
    setShowJournalForm(false);
    // Reset form data when closing
    setFormData({
      symbol: '',
      tradeType: 'long',
      entryDate: '',
      entryPrice: '',
      exitDate: '',
      exitPrice: '',
      positionSize: '',
      riskRewardRatio: '',
      stopLoss: '',
      takeProfit: '',
      entryReason: '',
      exitReason: '',
      emotionalState: '',
      marketConditions: '',
      whatWentWell: '',
      whatWentWrong: '',
      lessonsLearned: '',
      additionalNotes: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Calculate profit/loss
    const entryPrice = parseFloat(formData.entryPrice);
    const exitPrice = parseFloat(formData.exitPrice);
    const positionSize = parseFloat(formData.positionSize);
    
    let profitLoss = 0;
    let profitLossPercentage = 0;
    
    if (formData.tradeType === 'long') {
      profitLoss = (exitPrice - entryPrice) * positionSize;
      profitLossPercentage = ((exitPrice - entryPrice) / entryPrice) * 100;
    } else {
      profitLoss = (entryPrice - exitPrice) * positionSize;
      profitLossPercentage = ((entryPrice - exitPrice) / entryPrice) * 100;
    }
    
    // Create a new journal entry with the form data and calculated values
    const newEntry = {
      ...formData,
      id: Date.now(), // Simple unique ID based on timestamp
      profitLoss,
      profitLossPercentage,
      date: new Date().toISOString()
    };
    
    // Add the new entry to the journal entries array
    setJournalEntries([newEntry, ...journalEntries]);
    
    // Close the form and reset form data
    handleCloseForm();
  };

  return (
    <div className="trade-journal-container">
      <div className="journal-header">
        <h1>Trade Journal</h1>
        <p>Track your trades, analyze your performance, and improve your trading strategy</p>
        <button className="add-entry-button" onClick={handleOpenForm}>
          <i className="bi bi-plus-lg"></i> Add New Trade
        </button>
      </div>

      {showJournalForm ? (
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
                  <div className="form-group">
                    <label htmlFor="symbol">Symbol/Pair</label>
                    <input
                      type="text"
                      id="symbol"
                      name="symbol"
                      placeholder="e.g. AAPL, BTC/USD"
                      value={formData.symbol}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="tradeType">Trade Type</label>
                    <select 
                      id="tradeType"
                      name="tradeType" 
                      value={formData.tradeType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="long">Long</option>
                      <option value="short">Short</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="entryDate">Entry Date</label>
                    <input
                      type="date"
                      id="entryDate"
                      name="entryDate"
                      value={formData.entryDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="entryPrice">Entry Price</label>
                    <input
                      type="number"
                      id="entryPrice"
                      name="entryPrice"
                      step="0.0001"
                      placeholder="Entry price"
                      value={formData.entryPrice}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="exitDate">Exit Date</label>
                    <input
                      type="date"
                      id="exitDate"
                      name="exitDate"
                      value={formData.exitDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="exitPrice">Exit Price</label>
                    <input
                      type="number"
                      id="exitPrice"
                      name="exitPrice"
                      step="0.0001"
                      placeholder="Exit price"
                      value={formData.exitPrice}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="positionSize">Position Size</label>
                    <input
                      type="number"
                      id="positionSize"
                      name="positionSize"
                      placeholder="Number of shares/contracts"
                      value={formData.positionSize}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="riskRewardRatio">Risk/Reward Ratio</label>
                    <input
                      type="text"
                      id="riskRewardRatio"
                      name="riskRewardRatio"
                      placeholder="e.g. 1:3"
                      value={formData.riskRewardRatio}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="stopLoss">Stop Loss</label>
                    <input
                      type="number"
                      id="stopLoss"
                      name="stopLoss"
                      step="0.0001"
                      placeholder="Stop loss price"
                      value={formData.stopLoss}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="takeProfit">Take Profit</label>
                    <input
                      type="number"
                      id="takeProfit"
                      name="takeProfit"
                      step="0.0001"
                      placeholder="Take profit price"
                      value={formData.takeProfit}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              
              <div className="form-section">
                <h3>Trade Analysis</h3>
                
                <div className="form-group">
                  <label htmlFor="entryReason">Entry Reason</label>
                  <textarea
                    id="entryReason"
                    name="entryReason"
                    placeholder="Why did you enter this trade? What setup or pattern did you see?"
                    value={formData.entryReason}
                    onChange={handleInputChange}
                    required
                    rows="3"
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label htmlFor="exitReason">Exit Reason</label>
                  <textarea
                    id="exitReason"
                    name="exitReason"
                    placeholder="Why did you exit the trade? Was it at your target, stop loss, or a different reason?"
                    value={formData.exitReason}
                    onChange={handleInputChange}
                    required
                    rows="3"
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label htmlFor="emotionalState">Emotional State</label>
                  <textarea
                    id="emotionalState"
                    name="emotionalState"
                    placeholder="How were you feeling before, during, and after the trade? Were emotions a factor in your decision-making?"
                    value={formData.emotionalState}
                    onChange={handleInputChange}
                    rows="3"
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label htmlFor="marketConditions">Market Conditions</label>
                  <textarea
                    id="marketConditions"
                    name="marketConditions"
                    placeholder="What were the overall market conditions? Bullish, bearish, high volatility, news events, etc."
                    value={formData.marketConditions}
                    onChange={handleInputChange}
                    rows="3"
                  ></textarea>
                </div>
              </div>
              
              <div className="form-section">
                <h3>Lessons & Reflections</h3>
                
                <div className="form-group">
                  <label htmlFor="whatWentWell">What Went Well</label>
                  <textarea
                    id="whatWentWell"
                    name="whatWentWell"
                    placeholder="What aspects of the trade were executed well? What worked according to your plan?"
                    value={formData.whatWentWell}
                    onChange={handleInputChange}
                    rows="3"
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label htmlFor="whatWentWrong">What Went Wrong</label>
                  <textarea
                    id="whatWentWrong"
                    name="whatWentWrong"
                    placeholder="What mistakes were made? What could have been better executed?"
                    value={formData.whatWentWrong}
                    onChange={handleInputChange}
                    rows="3"
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label htmlFor="lessonsLearned">Lessons Learned</label>
                  <textarea
                    id="lessonsLearned"
                    name="lessonsLearned"
                    placeholder="What lessons can you take from this trade? How will you improve next time?"
                    value={formData.lessonsLearned}
                    onChange={handleInputChange}
                    required
                    rows="3"
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label htmlFor="additionalNotes">Additional Notes</label>
                  <textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    placeholder="Any other information you want to record about this trade"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    rows="3"
                  ></textarea>
                </div>
              </div>
              
              <div className="form-actions">
                <button type="button" className="cancel-button" onClick={handleCloseForm}>Cancel</button>
                <button type="submit" className="submit-button">Save Trade</button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="journal-entries-container">
          {journalEntries.length === 0 ? (
            <div className="no-entries">
              <i className="bi bi-journal-text"></i>
              <h2>No journal entries yet</h2>
              <p>Start tracking your trades by clicking the "Add New Trade" button above.</p>
            </div>
          ) : (
            <div className="entries-list">
              {journalEntries.map(entry => (
                <div key={entry.id} className="journal-entry-card">
                  <div className="entry-header">
                    <div className="entry-symbol">{entry.symbol}</div>
                    <div className={`entry-type ${entry.tradeType}`}>
                      {entry.tradeType === 'long' ? 'LONG' : 'SHORT'}
                    </div>
                    <div className={`entry-result ${entry.profitLoss >= 0 ? 'profit' : 'loss'}`}>
                      {entry.profitLoss >= 0 ? '+' : ''}{entry.profitLoss.toFixed(2)} ({entry.profitLossPercentage.toFixed(2)}%)
                    </div>
                  </div>
                  <div className="entry-details">
                    <div className="detail-item">
                      <span className="detail-label">Entry:</span>
                      <span className="detail-value">{entry.entryPrice} on {new Date(entry.entryDate).toLocaleDateString()}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Exit:</span>
                      <span className="detail-value">{entry.exitPrice} on {new Date(entry.exitDate).toLocaleDateString()}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Size:</span>
                      <span className="detail-value">{entry.positionSize}</span>
                    </div>
                  </div>
                  <div className="entry-lesson">
                    <strong>Lesson:</strong> {entry.lessonsLearned.slice(0, 100)}{entry.lessonsLearned.length > 100 ? '...' : ''}
                  </div>
                  <button className="view-details-button">View Details</button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TradeJournal;