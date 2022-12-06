const MyButton = ({ text, type, onClick }) => {
  // 정확한 타입이 입력되지 않을 경우 default로 처리
  const btnType = ['positive', 'negative'].includes(type) ? type : 'default';

  return (
    <button
      className={['MyButton', `MyButton_${btnType}`].join(' ')}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: 'default',
};
export default MyButton;
