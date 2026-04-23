import Image from 'next/image';
import Link from 'next/link';

let cnt = 0;

export default function VariableTest() {
  cnt++;

  return (
    <div>
      <div>モジュール内変数動作確認: {cnt}</div>
    </div>
  );
}
