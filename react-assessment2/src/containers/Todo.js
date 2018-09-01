const func1 = () => {
  $("#button").click(function () {
    $('.animated.infinite.pulse.delay-2s-active').toggleClass('.animated.infinite.pulse.delay-2s');
  });
};

module.exports = func1;