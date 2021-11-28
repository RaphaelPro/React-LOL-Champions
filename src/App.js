// import logo from "./logo.svg";
import "./App.css";

import { Component } from "react";

import { loadChamps } from "./utils/load-champs";
import { Champions } from "./components/Champions";

class App extends Component {
  //Construtor

  state = {
    // counter: 0,
    champions: [],
  };

  // handlePClicado = () => {
  //   // const { name } = this.state;
  //   // console.log(`P clicado ${name}`);
  //   this.setState({ name: "Júnior" });
  // };

  // handleAClick = (event) => {
  //   event.preventDefault();
  //   const { counter } = this.state;
  //   this.setState({ counter: counter + 1 });
  // };

  // timeoutUpdate = null;

  async componentDidMount() {
    //Executa uma vez após o componente ser montado na tela
    await this.loadChamps();
  }

  loadChamps = async () => {
    const champions = await loadChamps();
    this.setState({ champions });
  };

  // componentDidUpdate() {
  //   //Executa sempre que o componente for atualizado
  //   this.handleTimeout();
  // }

  // componentWillUnmount() {
  //   //Executa sempre que o componente for desmontado
  //   clearTimeout(this.timeoutUpdate);
  // }

  // handleTimeout = () => {
  //   console.log("OI");
  //   const { posts, counter } = this.state;
  //   this.timeoutUpdate = setTimeout(() => {
  //     posts[0].title = "O dia ta horrível";
  //     // this.setState({
  //     //   // posts: [
  //     //   //   {
  //     //   //     id: 1,
  //     //   //     title: "Dia ta lindo",
  //     //   //     body: " O corpo 1",
  //     //   //   },
  //     //   //   {
  //     //   //     id: 2,
  //     //   //     title: "Gamers never die",
  //     //   //     body: " O corpo 2",
  //     //   //   },
  //     //   //   {
  //     //   //     id: 3,
  //     //   //     title: "Aulão 3",
  //     //   //     body: " O corpo 3",
  //     //   //   },
  //     //   // ],
  //     // });
  //     this.setState({ posts});
  //   }, 5000);
  // };

  render() {
    const { champions } = this.state;
    // const { name, counter } = this.state;
    return (
      <section className="container">
        <Champions champions={champions} />
      </section>
    );
  }
}

export default App;
