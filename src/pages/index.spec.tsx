import Greeting from "@udtt/components/Greeting";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Todo from "@udtt/components/Todo";

describe("<Greeting/>", () => {
  it("renders a greeting", () => {
    render(<Greeting />);

    const message = screen.getByText("Hello, World!");
    expect(message).toBeInTheDocument();
  });

  it("버튼 클릭시 알림창 보여야 한다.", () => {
    window.alert = jest.fn();
    const { getByText } = render(<Greeting />);
    const button = getByText("click");

    fireEvent.click(button);
    expect(window.alert).toHaveBeenCalledWith("wow!!!");
  });
});

describe("Todos", () => {
  it("Todo 데이터 가져오기", async () => {
    // TODO: 용도 파악하기..이게 테스트에만 적용되어야 하는 로직인가
    // server.use(...handlers);
    render(<Todo />);

    await waitFor(() => {
      expect(screen.getByText("Todo")).toBeInTheDocument();
      expect(screen.getByText("먹기")).toBeInTheDocument();
    });
  });
});
