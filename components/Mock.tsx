async function Mock() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div>
      <p>
        This is a mock component that simulates a loading delay. It is used to
        demonstrate the streaming SSR feature.
      </p>
    </div>
  );
}

export default Mock;
