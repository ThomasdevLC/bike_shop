/* eslint-disable react/prop-types */

const DragInfo = (props) => {
  const { index } = props;

  return (
    <div>
      {index === 0 && (
        <p className="card__info">
          <span className="card__info__translate">
            Drag sideways <span className=" card__info__translate__arrow material-symbols-outlined">chevron_right</span>
          </span>
        </p>
      )}
    </div>
  );
};

export default DragInfo;
