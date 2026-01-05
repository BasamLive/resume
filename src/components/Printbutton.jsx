const Printbutton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button onClick={handlePrint} className="print-button">
      🖨️ print resume
    </button>
  );
};

export default Printbutton;
