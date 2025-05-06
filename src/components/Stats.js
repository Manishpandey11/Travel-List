export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className='stats'>
        <em>Start adding some items to your packing list🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPAcked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPAcked / numItems) * 100);
  return (
    <footer className='stats'>
      <em>
        {percentage === 100
          ? 'you got everything! Ready to go✈️ '
          : `🎒you have ${numItems} items in your list and you have already packed
        ${numPAcked} (${percentage}%) of the list`}
      </em>
    </footer>
  );
}
