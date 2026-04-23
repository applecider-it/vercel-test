import Image from 'next/image';
import Link from 'next/link';

import VariableTest from './VariableTest';
import ParamTest from './ParamTest';

export default function Development() {
  const sectionClass = 'p-3 my-5 border-4';

  return (
    <div>
      <h2 className="app-h2">development</h2>
      <div className="space-y-3">
        <div className={sectionClass}>
          <VariableTest />
        </div>
        <div className={sectionClass}>
          <ParamTest />
        </div>
      </div>
    </div>
  );
}
