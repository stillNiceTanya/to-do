import React, { Component } from "react";
import "./TodoListItem.css";

// const TodoListItem = ({ label, important = false }) => {
//   const style = {
//     color: important ? "tomato" : "black",
//   };

//   return (
//     <div className="todo-list-item d-flex justify-content-between">
//       <>
//         <span onClick={() => console.log(`Done: ${label}`)}
//           className="todo-list-item-label"
//           style={style}
//         >
//           {label}
//         </span>
//       </>
//       <>
//         {" "}
//         <button
//           type="button"
//           className="btn btn-outline-success btn-sm float-right"
//         >
//           <i className="fa fa-exclamation" />
//         </button>
//         <button
//           type="button"
//           className="btn btn-outline-danger btn-sm float-right"
//         >
//           <i className="fa fa-trash-o" />
//           {/* <i className="bi bi-trash"></i> */}
//         </button>
//       </>
//     </div>
//   );
// };

class TodoListItem extends Component {
  state = {
    done: false,
    important: false,
  };
  // onLabelClick = () => this.setState({ done: true });

  onLabelClick = () => {
    this.setState((state) => {
      return {
        done: !state.done,
      };
    });
  };

  // onMarkImportant = () => this.setState({ important: true });
  onMarkImportant = () => {
    this.setState((state) => {
      return { important: !state.important };
    });
  };

  render() {
    const { label } = this.props;
    const { done, important = false } = this.state;
    let classNames = "todo-list-item";
    if (done) {
      classNames = classNames + " done";
    }

    if (important) {
      classNames = classNames + " important";
    }
    return (
      <div className="todo-list-item d-flex justify-content-between">
        <>
          <span
            onClick={this.onLabelClick}
            className={classNames}
          >
            {label}
          </span>
        </>
        <>
          {" "}
          <button
            onClick={this.onMarkImportant}
            type="button"
            className="btn btn-outline-success btn-sm float-right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-balloon-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8.48 10.901C11.211 10.227 13 7.837 13 5A5 5 0 0 0 3 5c0 2.837 1.789 5.227 4.52 5.901l-.244.487a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.244-.487ZM4.352 3.356a4.004 4.004 0 0 1 3.15-2.325C7.774.997 8 1.224 8 1.5c0 .276-.226.496-.498.542-.95.162-1.749.78-2.173 1.617a.595.595 0 0 1-.52.341c-.346 0-.599-.329-.457-.644Z"
              />
            </svg>
          </button>
          <button
            type="button"
            className="btn "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path
                fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </button>
        </>
      </div>
    );
  }
}

export default TodoListItem;
