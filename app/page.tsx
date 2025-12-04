import React from 'react';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%',
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <div style={{
            fontSize: '60px',
            marginBottom: '20px'
          }}>📱</div>
          <h1 style={{
            fontSize: '32px',
            color: '#333',
            marginBottom: '10px',
            fontWeight: '700'
          }}>
            ربات مقایسه قیمت موبایل
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#666',
            lineHeight: '1.6'
          }}>
            Mobile Price Comparison Telegram Bot
          </p>
        </div>

        <div style={{
          background: '#f7fafc',
          borderRadius: '12px',
          padding: '30px',
          marginBottom: '30px'
        }}>
          <h2 style={{
            fontSize: '24px',
            color: '#333',
            marginBottom: '20px',
            fontWeight: '600'
          }}>✨ Features</h2>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            {[
              'Search mobile phones by brand and model',
              'Compare prices across multiple online stores',
              'Real-time price updates and availability',
              'Detailed specifications and features',
              'Price history and trends analysis',
              'Best deal recommendations'
            ].map((feature, idx) => (
              <li key={idx} style={{
                padding: '12px 0',
                borderBottom: idx < 5 ? '1px solid #e2e8f0' : 'none',
                color: '#555',
                fontSize: '16px'
              }}>
                <span style={{ color: '#667eea', marginRight: '10px' }}>▸</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '12px',
          padding: '30px',
          color: 'white',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '20px',
            marginBottom: '15px',
            fontWeight: '600'
          }}>🤖 How to Use</h3>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.8',
            opacity: '0.95'
          }}>
            Start the bot on Telegram and search for any mobile phone.
            Get instant price comparisons from top online retailers
            and make informed purchasing decisions.
          </p>
          <div style={{
            marginTop: '20px',
            padding: '15px',
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '8px',
            fontSize: '18px',
            fontWeight: '600'
          }}>
            Bot Status: Active ✅
          </div>
        </div>

        <div style={{
          marginTop: '30px',
          textAlign: 'center',
          color: '#999',
          fontSize: '14px'
        }}>
          <p>API Endpoint: <code style={{
            background: '#f7fafc',
            padding: '4px 8px',
            borderRadius: '4px',
            color: '#667eea'
          }}>/api/webhook</code></p>
        </div>
      </div>
    </div>
  );
}
