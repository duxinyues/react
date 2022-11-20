import { FC, useState,  } from "react";
import { useDrag } from "react-dnd";

const Word: FC = ({ text, type, id, ...props }: any) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [{ isDragging }, drag]: any = useDrag(() => ({
    type,
    item: { type, id },
    end: (item, monitor) => {
      let top = 0,
        left = 0;
      if (monitor.didDrop()) {
        const dropRes = monitor.getDropResult() as any; // 拖拽对象
        if (dropRes) {
          left = dropRes.left;
          top = dropRes.top;
        }

        setX((x) => x + left);
        setY((y) => y + top);
      } else {
        setX(0);
        setY(0);
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      className="word_drag"
      id={id}
      ref={drag}
      style={{
        opacity: isDragging ? 0 : 1,
        top: `${y}px`,
        left: `${x}px`,
      }}
    >
      {text}
    </div>
  );
};

export default Word;
