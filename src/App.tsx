import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './app/store';
import { addItem, removeItem } from './features/list/listSlice';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.list.items);

  return (
    <div className="container">
      <div className="buttons">
        <button onClick={() => dispatch(addItem())}>Добавить</button>
        <button onClick={() => dispatch(removeItem())}>Удалить</button>
      </div>
      <div className="list">
        <AnimatePresence initial={false}>
          {items.map((color) => (
            <motion.div
              key={color}
              className="item"
              style={{ backgroundColor: color }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              layout
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
