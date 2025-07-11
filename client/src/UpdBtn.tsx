
import type { Dispatch, SetStateAction } from 'react';

interface Props {
    setValue: Dispatch<SetStateAction<string>>
}

const UpdBtn: React.FC<Props> = ({ setValue }) => {
  return (
    <>
        <button onClick={() => setValue("dark")}>
            ダークモード
        </button>
        <button onClick={() => setValue("light")}>
            ライトモード
        </button>
    </>

  );
};

export default UpdBtn;
