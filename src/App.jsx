import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function App() {
  const [view, setView] = useState("home");
  const checklistItems = [
    "Tendência definida (alta ou baixa)?",
    "RSI acima de 50 (compra) ou abaixo (venda)?",
    "MACD cruzado favorável?",
    "Histograma confirma?",
    "Volume forte no candle de entrada?",
    "Entrada clara por candle de força?",
    "Stop técnico definido (mínima/LTA/ATR)?",
    "Risco controlado (1-2%)?",
    "Plano de saída definido?",
    "Emoção sob controle?"
  ];

  const padroes = [
    {
      nome: "Martelo",
      descricao: "Padrão de reversão altista com sombra inferior longa.",
    },
    {
      nome: "Engolfo de Alta",
      descricao: "Candle verde maior cobrindo completamente um candle vermelho anterior.",
    },
    {
      nome: "Estrela da Manhã",
      descricao: "Padrão de reversão altista com três candles (queda, doji, alta forte).",
    },
    {
      nome: "RSI",
      descricao: "Oscilador que mede força do movimento. Acima de 50 = alta, abaixo de 50 = baixa.",
    },
    {
      nome: "MACD",
      descricao: "Indicador de tendência baseado em médias móveis e histograma de força.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Scalping BTC/USDT - Protótipo de App</h1>

      {view === "home" && (
        <div className="grid gap-4 max-w-md mx-auto">
          <Card>
            <CardContent className="p-4">
              <Button className="w-full mb-2" onClick={() => setView("nova")}>Nova Operação</Button>
              <Button className="w-full mb-2" onClick={() => setView("checklist")}>Checklist de Entrada</Button>
              <Button className="w-full mb-2" onClick={() => setView("estudo")}>Estudo de Estratégias</Button>
              <Button className="w-full" onClick={() => setView("resumo")}>Resumo de Resultados</Button>
            </CardContent>
          </Card>
        </div>
      )}

      {view === "checklist" && (
        <div className="max-w-xl mx-auto">
          <Button className="mb-4" variant="outline" onClick={() => setView("home")}>Voltar ao Início</Button>
          <h2 className="text-xl font-semibold mb-4">Checklist de Entrada</h2>
          <Card>
            <CardContent className="p-4">
              {checklistItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 mb-2">
                  <Checkbox id={`item-${index}`} />
                  <label htmlFor={`item-${index}`} className="text-sm">{item}</label>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      )}

      {view === "nova" && (
        <div className="max-w-xl mx-auto">
          <Button className="mb-4" variant="outline" onClick={() => setView("home")}>Voltar ao Início</Button>
          <h2 className="text-xl font-semibold mb-4">Nova Operação</h2>
          <Card>
            <CardContent className="space-y-3">
              <Input placeholder="Par Operado (ex: BTC/USDT)" />
              <Input placeholder="Data" />
              <Input placeholder="Preço de Entrada" />
              <Input placeholder="Preço de Saída" />
              <Input placeholder="Resultado (em USDT ou %)" />
              <Input placeholder="RSI no momento da entrada" />
              <Input placeholder="MACD cruzado? (Sim/Não)" />
              <Input placeholder="Volume estava alto? (Sim/Não)" />
              <Input placeholder="Tipo de Operação (Rompimento/Pullback)" />
              <Input placeholder="Print salvo? (Sim/Não)" />
              <Textarea placeholder="Comentário sobre emoção e execução..." />
              <Button className="w-full">Salvar Operação</Button>
            </CardContent>
          </Card>
        </div>
      )}

      {view === "estudo" && (
        <div className="max-w-xl mx-auto">
          <Button className="mb-4" variant="outline" onClick={() => setView("home")}>Voltar ao Início</Button>
          <h2 className="text-xl font-semibold mb-4">Estudo de Estratégias</h2>
          <Card>
            <CardContent className="space-y-4">
              {padroes.map((p, i) => (
                <div key={i}>
                  <p className="font-bold text-md">{p.nome}</p>
                  <p className="text-sm text-gray-700">{p.descricao}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      )}

      {view === "resumo" && (
        <div className="max-w-xl mx-auto">
          <Button className="mb-4" variant="outline" onClick={() => setView("home")}>Voltar ao Início</Button>
          <h2 className="text-xl font-semibold mb-4">Resumo de Resultados</h2>
          <Card>
            <CardContent className="space-y-3">
              <Input placeholder="Total de Operações no mês" />
              <Input placeholder="Taxa de Acerto (%)" />
              <Input placeholder="Lucro/Prejuízo Total (USDT)" />
              <Textarea placeholder="Erros mais frequentes" />
              <Textarea placeholder="Acertos que quero repetir" />
              <Input placeholder="Nota de Disciplina (0 a 10)" />
              <Textarea placeholder="O que vou melhorar no próximo mês" />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
