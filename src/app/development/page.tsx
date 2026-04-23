import Image from "next/image";
import Link from 'next/link';

let cnt = 0;

export default function Development() {
  cnt ++;

  return (
    <div>
      <h2 className="app-h2">
        development
      </h2>
      <div>
        モジュール内変数動作確認: {cnt}
      </div>
    </div>
  );
}
