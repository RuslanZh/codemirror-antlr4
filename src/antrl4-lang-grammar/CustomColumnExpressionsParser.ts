// Generated from ./src/antrl4-lang-grammar/CustomColumnExpressions.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CustomColumnExpressionsListener } from "./CustomColumnExpressionsListener";
import { CustomColumnExpressionsVisitor } from "./CustomColumnExpressionsVisitor";


export class CustomColumnExpressionsParser extends Parser {
	public static readonly ASTERISK = 1;
	public static readonly SLASH = 2;
	public static readonly PLUS = 3;
	public static readonly MINUS = 4;
	public static readonly EQUAL = 5;
	public static readonly NOT_EQUAL = 6;
	public static readonly GREATER_THAN = 7;
	public static readonly LESS_THAN = 8;
	public static readonly GREATER_OR_EQUAL = 9;
	public static readonly LESS_OR_EQUAL = 10;
	public static readonly CIRCUMFLEX = 11;
	public static readonly CONCAT = 12;
	public static readonly TRIM = 13;
	public static readonly LEN = 14;
	public static readonly TO_STRING = 15;
	public static readonly LOWER = 16;
	public static readonly UPPER = 17;
	public static readonly LEFT = 18;
	public static readonly RIGHT = 19;
	public static readonly MID = 20;
	public static readonly SUBSTITUTE = 21;
	public static readonly REPLACE = 22;
	public static readonly MOD = 23;
	public static readonly ABS = 24;
	public static readonly DATE_DIFF = 25;
	public static readonly TO_NUMERIC = 26;
	public static readonly DAY = 27;
	public static readonly WEEK = 28;
	public static readonly WEEKDAY = 29;
	public static readonly MONTH = 30;
	public static readonly YEAR = 31;
	public static readonly HOUR = 32;
	public static readonly MINUTE = 33;
	public static readonly FIND = 34;
	public static readonly AND = 35;
	public static readonly OR = 36;
	public static readonly XOR = 37;
	public static readonly NOT = 38;
	public static readonly EXACT = 39;
	public static readonly TO_BOOL = 40;
	public static readonly NOW = 41;
	public static readonly TO_DATE = 42;
	public static readonly IF = 43;
	public static readonly BOOLEAN_VALUE = 44;
	public static readonly DATE_FORMAT = 45;
	public static readonly DATE_VALUE = 46;
	public static readonly NUMERIC_VALUE = 47;
	public static readonly COLUMN_NAME = 48;
	public static readonly STRING_VALUE = 49;
	public static readonly LPAREN = 50;
	public static readonly RPAREN = 51;
	public static readonly COMMA = 52;
	public static readonly WHITESPACE = 53;
	public static readonly ANY = 54;
	public static readonly RULE_objectExpression = 0;
	public static readonly RULE_numericExpression = 1;
	public static readonly RULE_booleanExpression = 2;
	public static readonly RULE_dateExpression = 3;
	public static readonly RULE_stringExpression = 4;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"objectExpression", "numericExpression", "booleanExpression", "dateExpression", 
		"stringExpression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'*'", "'/'", "'+'", "'-'", "'='", "'<>'", "'>'", "'<'", "'>='", 
		"'<='", "'^'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'('", "')'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ASTERISK", "SLASH", "PLUS", "MINUS", "EQUAL", "NOT_EQUAL", 
		"GREATER_THAN", "LESS_THAN", "GREATER_OR_EQUAL", "LESS_OR_EQUAL", "CIRCUMFLEX", 
		"CONCAT", "TRIM", "LEN", "TO_STRING", "LOWER", "UPPER", "LEFT", "RIGHT", 
		"MID", "SUBSTITUTE", "REPLACE", "MOD", "ABS", "DATE_DIFF", "TO_NUMERIC", 
		"DAY", "WEEK", "WEEKDAY", "MONTH", "YEAR", "HOUR", "MINUTE", "FIND", "AND", 
		"OR", "XOR", "NOT", "EXACT", "TO_BOOL", "NOW", "TO_DATE", "IF", "BOOLEAN_VALUE", 
		"DATE_FORMAT", "DATE_VALUE", "NUMERIC_VALUE", "COLUMN_NAME", "STRING_VALUE", 
		"LPAREN", "RPAREN", "COMMA", "WHITESPACE", "ANY",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CustomColumnExpressionsParser._LITERAL_NAMES, CustomColumnExpressionsParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CustomColumnExpressionsParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CustomColumnExpressions.g4"; }

	// @Override
	public get ruleNames(): string[] { return CustomColumnExpressionsParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CustomColumnExpressionsParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CustomColumnExpressionsParser._ATN, this);
	}
	// @RuleVersion(0)
	public objectExpression(): ObjectExpressionContext {
		let _localctx: ObjectExpressionContext = new ObjectExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CustomColumnExpressionsParser.RULE_objectExpression);
		try {
			this.state = 15;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				_localctx = new ColumnNameContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 10;
				this.match(CustomColumnExpressionsParser.COLUMN_NAME);
				}
				break;

			case 2:
				_localctx = new BooleanExpContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 11;
				this.booleanExpression();
				}
				break;

			case 3:
				_localctx = new NumericExpContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 12;
				this.numericExpression(0);
				}
				break;

			case 4:
				_localctx = new DateExpContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 13;
				this.dateExpression();
				}
				break;

			case 5:
				_localctx = new StringExpContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 14;
				this.stringExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public numericExpression(): NumericExpressionContext;
	public numericExpression(_p: number): NumericExpressionContext;
	// @RuleVersion(0)
	public numericExpression(_p?: number): NumericExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NumericExpressionContext = new NumericExpressionContext(this._ctx, _parentState);
		let _prevctx: NumericExpressionContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, CustomColumnExpressionsParser.RULE_numericExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 127;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CustomColumnExpressionsParser.LPAREN:
				{
				_localctx = new NumericParenthesisContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 18;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 19;
				this.numericExpression(0);
				this.state = 20;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;
			case CustomColumnExpressionsParser.TO_NUMERIC:
				{
				_localctx = new ToNumericFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 22;
				this.match(CustomColumnExpressionsParser.TO_NUMERIC);
				this.state = 23;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 24;
				(_localctx as ToNumericFunctionContext)._string = this.stringExpression();
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CustomColumnExpressionsParser.COMMA) {
					{
					this.state = 25;
					this.match(CustomColumnExpressionsParser.COMMA);
					this.state = 26;
					(_localctx as ToNumericFunctionContext)._scale = this.numericExpression(0);
					}
				}

				this.state = 29;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;
			case CustomColumnExpressionsParser.MOD:
				{
				_localctx = new ModFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 31;
				this.match(CustomColumnExpressionsParser.MOD);
				this.state = 32;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 33;
				(_localctx as ModFunctionContext)._dividend = this.numericExpression(0);
				this.state = 34;
				this.match(CustomColumnExpressionsParser.COMMA);
				this.state = 35;
				(_localctx as ModFunctionContext)._divisor = this.numericExpression(0);
				this.state = 36;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;
			case CustomColumnExpressionsParser.ABS:
				{
				_localctx = new AbsFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 38;
				this.match(CustomColumnExpressionsParser.ABS);
				this.state = 39;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 40;
				(_localctx as AbsFunctionContext)._number = this.numericExpression(0);
				this.state = 41;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;
			case CustomColumnExpressionsParser.LEN:
				{
				_localctx = new LenghtFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 43;
				this.match(CustomColumnExpressionsParser.LEN);
				this.state = 44;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 45;
				(_localctx as LenghtFunctionContext)._string = this.stringExpression();
				this.state = 46;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;
			case CustomColumnExpressionsParser.FIND:
				{
				_localctx = new FindFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 48;
				this.match(CustomColumnExpressionsParser.FIND);
				this.state = 49;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 50;
				(_localctx as FindFunctionContext)._findText = this.stringExpression();
				this.state = 51;
				this.match(CustomColumnExpressionsParser.COMMA);
				this.state = 52;
				(_localctx as FindFunctionContext)._withinText = this.stringExpression();
				this.state = 55;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CustomColumnExpressionsParser.COMMA) {
					{
					this.state = 53;
					this.match(CustomColumnExpressionsParser.COMMA);
					this.state = 54;
					(_localctx as FindFunctionContext)._startNum = this.numericExpression(0);
					}
				}

				this.state = 57;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;
			case CustomColumnExpressionsParser.DAY:
				{
				_localctx = new DayFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 59;
				this.match(CustomColumnExpressionsParser.DAY);
				this.state = 60;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 61;
				(_localctx as DayFunctionContext)._date = this.dateExpression();
				this.state = 62;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;
			case CustomColumnExpressionsParser.WEEK:
				{
				_localctx = new WeekFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 64;
				this.match(CustomColumnExpressionsParser.WEEK);
				this.state = 65;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 66;
				(_localctx as WeekFunctionContext)._date = this.dateExpression();
				this.state = 69;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CustomColumnExpressionsParser.COMMA) {
					{
					this.state = 67;
					this.match(CustomColumnExpressionsParser.COMMA);
					this.state = 68;
					(_localctx as WeekFunctionContext)._returnType = this.numericExpression(0);
					}
				}

				this.state = 71;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;
			case CustomColumnExpressionsParser.WEEKDAY:
				{
				_localctx = new WeekDayFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 73;
				this.match(CustomColumnExpressionsParser.WEEKDAY);
				this.state = 74;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 75;
				(_localctx as WeekDayFunctionContext)._date = this.dateExpression();
				this.state = 78;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CustomColumnExpressionsParser.COMMA) {
					{
					this.state = 76;
					this.match(CustomColumnExpressionsParser.COMMA);
					this.state = 77;
					(_localctx as WeekDayFunctionContext)._returnType = this.numericExpression(0);
					}
				}

				this.state = 80;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;
			case CustomColumnExpressionsParser.MONTH:
				{
				_localctx = new MonthFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 82;
				this.match(CustomColumnExpressionsParser.MONTH);
				this.state = 83;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 84;
				(_localctx as MonthFunctionContext)._date = this.dateExpression();
				this.state = 85;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;
			case CustomColumnExpressionsParser.YEAR:
				{
				_localctx = new YearFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 87;
				this.match(CustomColumnExpressionsParser.YEAR);
				this.state = 88;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 89;
				(_localctx as YearFunctionContext)._date = this.dateExpression();
				this.state = 90;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;
			case CustomColumnExpressionsParser.HOUR:
				{
				_localctx = new HourFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 92;
				this.match(CustomColumnExpressionsParser.HOUR);
				this.state = 93;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 94;
				(_localctx as HourFunctionContext)._date = this.dateExpression();
				this.state = 95;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;
			case CustomColumnExpressionsParser.MINUTE:
				{
				_localctx = new MinuteFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 97;
				this.match(CustomColumnExpressionsParser.MINUTE);
				this.state = 98;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 99;
				(_localctx as MinuteFunctionContext)._date = this.dateExpression();
				this.state = 100;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;
			case CustomColumnExpressionsParser.DATE_DIFF:
				{
				_localctx = new DateDiffFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 102;
				this.match(CustomColumnExpressionsParser.DATE_DIFF);
				this.state = 103;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 104;
				(_localctx as DateDiffFunctionContext)._startDate = this.dateExpression();
				this.state = 105;
				this.match(CustomColumnExpressionsParser.COMMA);
				this.state = 106;
				(_localctx as DateDiffFunctionContext)._endDate = this.dateExpression();
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CustomColumnExpressionsParser.COMMA) {
					{
					this.state = 107;
					this.match(CustomColumnExpressionsParser.COMMA);
					this.state = 108;
					(_localctx as DateDiffFunctionContext)._unit = this.stringExpression();
					}
				}

				this.state = 111;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;
			case CustomColumnExpressionsParser.IF:
				{
				_localctx = new NumericConditionExpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 113;
				this.match(CustomColumnExpressionsParser.IF);
				this.state = 114;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 115;
				(_localctx as NumericConditionExpContext)._condition = this.booleanExpression();
				this.state = 116;
				this.match(CustomColumnExpressionsParser.COMMA);
				this.state = 117;
				(_localctx as NumericConditionExpContext)._thenSection = this.numericExpression(0);
				this.state = 118;
				this.match(CustomColumnExpressionsParser.COMMA);
				this.state = 119;
				(_localctx as NumericConditionExpContext)._elseSection = this.numericExpression(0);
				this.state = 120;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;
			case CustomColumnExpressionsParser.MINUS:
			case CustomColumnExpressionsParser.NUMERIC_VALUE:
				{
				_localctx = new NumericValueContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CustomColumnExpressionsParser.MINUS) {
					{
					this.state = 122;
					(_localctx as NumericValueContext)._minus = this.match(CustomColumnExpressionsParser.MINUS);
					}
				}

				this.state = 125;
				(_localctx as NumericValueContext)._value = this.match(CustomColumnExpressionsParser.NUMERIC_VALUE);
				}
				break;
			case CustomColumnExpressionsParser.COLUMN_NAME:
				{
				_localctx = new NumericColumnNameContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 126;
				this.match(CustomColumnExpressionsParser.COLUMN_NAME);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 146;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 144;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
					case 1:
						{
						_localctx = new PowerExpContext(new NumericExpressionContext(_parentctx, _parentState));
						(_localctx as PowerExpContext)._number = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CustomColumnExpressionsParser.RULE_numericExpression);
						this.state = 129;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 130;
						this.match(CustomColumnExpressionsParser.CIRCUMFLEX);
						this.state = 131;
						(_localctx as PowerExpContext)._exponent = this.numericExpression(21);
						}
						break;

					case 2:
						{
						_localctx = new MultiplyExpContext(new NumericExpressionContext(_parentctx, _parentState));
						(_localctx as MultiplyExpContext)._multiplier = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CustomColumnExpressionsParser.RULE_numericExpression);
						this.state = 132;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 133;
						this.match(CustomColumnExpressionsParser.ASTERISK);
						this.state = 134;
						(_localctx as MultiplyExpContext)._multiplicand = this.numericExpression(21);
						}
						break;

					case 3:
						{
						_localctx = new DivisionExpContext(new NumericExpressionContext(_parentctx, _parentState));
						(_localctx as DivisionExpContext)._dividend = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CustomColumnExpressionsParser.RULE_numericExpression);
						this.state = 135;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 136;
						this.match(CustomColumnExpressionsParser.SLASH);
						this.state = 137;
						(_localctx as DivisionExpContext)._divisor = this.numericExpression(20);
						}
						break;

					case 4:
						{
						_localctx = new AdditionExpContext(new NumericExpressionContext(_parentctx, _parentState));
						(_localctx as AdditionExpContext)._augent = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CustomColumnExpressionsParser.RULE_numericExpression);
						this.state = 138;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 139;
						this.match(CustomColumnExpressionsParser.PLUS);
						this.state = 140;
						(_localctx as AdditionExpContext)._addent = this.numericExpression(19);
						}
						break;

					case 5:
						{
						_localctx = new SubtractionExpContext(new NumericExpressionContext(_parentctx, _parentState));
						(_localctx as SubtractionExpContext)._minuend = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CustomColumnExpressionsParser.RULE_numericExpression);
						this.state = 141;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 142;
						this.match(CustomColumnExpressionsParser.MINUS);
						this.state = 143;
						(_localctx as SubtractionExpContext)._subtrahend = this.numericExpression(18);
						}
						break;
					}
					}
				}
				this.state = 148;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanExpression(): BooleanExpressionContext {
		let _localctx: BooleanExpressionContext = new BooleanExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CustomColumnExpressionsParser.RULE_booleanExpression);
		let _la: number;
		try {
			this.state = 266;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				_localctx = new LogicalParenthesisContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 149;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 150;
				this.booleanExpression();
				this.state = 151;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;

			case 2:
				_localctx = new NumericEqualExpContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 153;
				(_localctx as NumericEqualExpContext)._left = this.numericExpression(0);
				this.state = 154;
				this.match(CustomColumnExpressionsParser.EQUAL);
				this.state = 155;
				(_localctx as NumericEqualExpContext)._right = this.numericExpression(0);
				}
				break;

			case 3:
				_localctx = new NumericNotEqualExpContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 157;
				(_localctx as NumericNotEqualExpContext)._left = this.numericExpression(0);
				this.state = 158;
				this.match(CustomColumnExpressionsParser.NOT_EQUAL);
				this.state = 159;
				(_localctx as NumericNotEqualExpContext)._right = this.numericExpression(0);
				}
				break;

			case 4:
				_localctx = new NumericGreaterThanExpContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 161;
				(_localctx as NumericGreaterThanExpContext)._left = this.numericExpression(0);
				this.state = 162;
				this.match(CustomColumnExpressionsParser.GREATER_THAN);
				this.state = 163;
				(_localctx as NumericGreaterThanExpContext)._right = this.numericExpression(0);
				}
				break;

			case 5:
				_localctx = new NumericLessThanExpContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 165;
				(_localctx as NumericLessThanExpContext)._left = this.numericExpression(0);
				this.state = 166;
				this.match(CustomColumnExpressionsParser.LESS_THAN);
				this.state = 167;
				(_localctx as NumericLessThanExpContext)._right = this.numericExpression(0);
				}
				break;

			case 6:
				_localctx = new NumericGreaterOrEqualExpContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 169;
				(_localctx as NumericGreaterOrEqualExpContext)._left = this.numericExpression(0);
				this.state = 170;
				this.match(CustomColumnExpressionsParser.GREATER_OR_EQUAL);
				this.state = 171;
				(_localctx as NumericGreaterOrEqualExpContext)._right = this.numericExpression(0);
				}
				break;

			case 7:
				_localctx = new NumericLessOrEqualExpContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 173;
				(_localctx as NumericLessOrEqualExpContext)._left = this.numericExpression(0);
				this.state = 174;
				this.match(CustomColumnExpressionsParser.LESS_OR_EQUAL);
				this.state = 175;
				(_localctx as NumericLessOrEqualExpContext)._right = this.numericExpression(0);
				}
				break;

			case 8:
				_localctx = new DateEqualExpContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 177;
				(_localctx as DateEqualExpContext)._left = this.dateExpression();
				this.state = 178;
				this.match(CustomColumnExpressionsParser.EQUAL);
				this.state = 179;
				(_localctx as DateEqualExpContext)._right = this.dateExpression();
				}
				break;

			case 9:
				_localctx = new DateNotEqualExpContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 181;
				(_localctx as DateNotEqualExpContext)._left = this.dateExpression();
				this.state = 182;
				this.match(CustomColumnExpressionsParser.NOT_EQUAL);
				this.state = 183;
				(_localctx as DateNotEqualExpContext)._right = this.dateExpression();
				}
				break;

			case 10:
				_localctx = new DateGreaterThanExpContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 185;
				(_localctx as DateGreaterThanExpContext)._left = this.dateExpression();
				this.state = 186;
				this.match(CustomColumnExpressionsParser.GREATER_THAN);
				this.state = 187;
				(_localctx as DateGreaterThanExpContext)._right = this.dateExpression();
				}
				break;

			case 11:
				_localctx = new DateLessThanExpContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 189;
				(_localctx as DateLessThanExpContext)._left = this.dateExpression();
				this.state = 190;
				this.match(CustomColumnExpressionsParser.LESS_THAN);
				this.state = 191;
				(_localctx as DateLessThanExpContext)._right = this.dateExpression();
				}
				break;

			case 12:
				_localctx = new DateGreaterOrEqualExpContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 193;
				(_localctx as DateGreaterOrEqualExpContext)._left = this.dateExpression();
				this.state = 194;
				this.match(CustomColumnExpressionsParser.GREATER_OR_EQUAL);
				this.state = 195;
				(_localctx as DateGreaterOrEqualExpContext)._right = this.dateExpression();
				}
				break;

			case 13:
				_localctx = new DateLessOrEqualExpContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 197;
				(_localctx as DateLessOrEqualExpContext)._left = this.dateExpression();
				this.state = 198;
				this.match(CustomColumnExpressionsParser.LESS_OR_EQUAL);
				this.state = 199;
				(_localctx as DateLessOrEqualExpContext)._right = this.dateExpression();
				}
				break;

			case 14:
				_localctx = new ToBooleanFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 201;
				this.match(CustomColumnExpressionsParser.TO_BOOL);
				this.state = 202;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 203;
				(_localctx as ToBooleanFunctionContext)._object = this.objectExpression();
				this.state = 204;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;

			case 15:
				_localctx = new AndFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 206;
				this.match(CustomColumnExpressionsParser.AND);
				this.state = 207;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 208;
				this.booleanExpression();
				this.state = 211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 209;
					this.match(CustomColumnExpressionsParser.COMMA);
					this.state = 210;
					this.booleanExpression();
					}
					}
					this.state = 213;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === CustomColumnExpressionsParser.COMMA);
				this.state = 215;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;

			case 16:
				_localctx = new OrFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 217;
				this.match(CustomColumnExpressionsParser.OR);
				this.state = 218;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 219;
				this.booleanExpression();
				this.state = 222;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 220;
					this.match(CustomColumnExpressionsParser.COMMA);
					this.state = 221;
					this.booleanExpression();
					}
					}
					this.state = 224;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === CustomColumnExpressionsParser.COMMA);
				this.state = 226;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;

			case 17:
				_localctx = new XorFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 228;
				this.match(CustomColumnExpressionsParser.XOR);
				this.state = 229;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 230;
				this.booleanExpression();
				this.state = 233;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 231;
					this.match(CustomColumnExpressionsParser.COMMA);
					this.state = 232;
					this.booleanExpression();
					}
					}
					this.state = 235;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === CustomColumnExpressionsParser.COMMA);
				this.state = 237;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;

			case 18:
				_localctx = new NotFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 239;
				this.match(CustomColumnExpressionsParser.NOT);
				this.state = 240;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 241;
				this.booleanExpression();
				this.state = 242;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;

			case 19:
				_localctx = new ExactFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 244;
				this.match(CustomColumnExpressionsParser.EXACT);
				this.state = 245;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 246;
				this.stringExpression();
				this.state = 249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 247;
					this.match(CustomColumnExpressionsParser.COMMA);
					this.state = 248;
					this.stringExpression();
					}
					}
					this.state = 251;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === CustomColumnExpressionsParser.COMMA);
				this.state = 253;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;

			case 20:
				_localctx = new BooleanConditionExpContext(_localctx);
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 255;
				this.match(CustomColumnExpressionsParser.IF);
				this.state = 256;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 257;
				(_localctx as BooleanConditionExpContext)._condition = this.booleanExpression();
				this.state = 258;
				this.match(CustomColumnExpressionsParser.COMMA);
				this.state = 259;
				(_localctx as BooleanConditionExpContext)._thenSection = this.booleanExpression();
				this.state = 260;
				this.match(CustomColumnExpressionsParser.COMMA);
				this.state = 261;
				(_localctx as BooleanConditionExpContext)._elseSection = this.booleanExpression();
				this.state = 262;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;

			case 21:
				_localctx = new BooleanValueExpContext(_localctx);
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 264;
				this.match(CustomColumnExpressionsParser.BOOLEAN_VALUE);
				}
				break;

			case 22:
				_localctx = new BooleanColumnNameContext(_localctx);
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 265;
				this.match(CustomColumnExpressionsParser.COLUMN_NAME);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dateExpression(): DateExpressionContext {
		let _localctx: DateExpressionContext = new DateExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CustomColumnExpressionsParser.RULE_dateExpression);
		let _la: number;
		try {
			this.state = 291;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CustomColumnExpressionsParser.TO_DATE:
				_localctx = new ToDateExpContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 268;
				this.match(CustomColumnExpressionsParser.TO_DATE);
				this.state = 269;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 270;
				(_localctx as ToDateExpContext)._string = this.stringExpression();
				this.state = 273;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CustomColumnExpressionsParser.COMMA) {
					{
					this.state = 271;
					this.match(CustomColumnExpressionsParser.COMMA);
					this.state = 272;
					(_localctx as ToDateExpContext)._format = this.stringExpression();
					}
				}

				this.state = 275;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;
			case CustomColumnExpressionsParser.NOW:
				_localctx = new NowFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 277;
				this.match(CustomColumnExpressionsParser.NOW);
				this.state = 278;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 279;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;
			case CustomColumnExpressionsParser.IF:
				_localctx = new DateConditionExpContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 280;
				this.match(CustomColumnExpressionsParser.IF);
				this.state = 281;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 282;
				(_localctx as DateConditionExpContext)._condition = this.booleanExpression();
				this.state = 283;
				this.match(CustomColumnExpressionsParser.COMMA);
				this.state = 284;
				(_localctx as DateConditionExpContext)._thenSection = this.dateExpression();
				this.state = 285;
				this.match(CustomColumnExpressionsParser.COMMA);
				this.state = 286;
				(_localctx as DateConditionExpContext)._elseSection = this.dateExpression();
				this.state = 287;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;
			case CustomColumnExpressionsParser.DATE_VALUE:
				_localctx = new DateValueContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 289;
				this.match(CustomColumnExpressionsParser.DATE_VALUE);
				}
				break;
			case CustomColumnExpressionsParser.COLUMN_NAME:
				_localctx = new DateColumnNameContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 290;
				this.match(CustomColumnExpressionsParser.COLUMN_NAME);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringExpression(): StringExpressionContext {
		let _localctx: StringExpressionContext = new StringExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CustomColumnExpressionsParser.RULE_stringExpression);
		let _la: number;
		try {
			this.state = 391;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CustomColumnExpressionsParser.TO_STRING:
				_localctx = new ToStringFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 293;
				this.match(CustomColumnExpressionsParser.TO_STRING);
				this.state = 294;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 295;
				(_localctx as ToStringFunctionContext)._object = this.objectExpression();
				this.state = 298;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CustomColumnExpressionsParser.COMMA) {
					{
					this.state = 296;
					this.match(CustomColumnExpressionsParser.COMMA);
					this.state = 297;
					(_localctx as ToStringFunctionContext)._format = this.stringExpression();
					}
				}

				this.state = 300;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;
			case CustomColumnExpressionsParser.CONCAT:
				_localctx = new ConcatFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 302;
				this.match(CustomColumnExpressionsParser.CONCAT);
				this.state = 303;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 304;
				this.stringExpression();
				this.state = 309;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CustomColumnExpressionsParser.COMMA) {
					{
					{
					this.state = 305;
					this.match(CustomColumnExpressionsParser.COMMA);
					this.state = 306;
					this.stringExpression();
					}
					}
					this.state = 311;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 312;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;
			case CustomColumnExpressionsParser.TRIM:
				_localctx = new TrimFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 314;
				this.match(CustomColumnExpressionsParser.TRIM);
				this.state = 315;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 316;
				(_localctx as TrimFunctionContext)._stringToTrim = this.stringExpression();
				this.state = 317;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;
			case CustomColumnExpressionsParser.LOWER:
				_localctx = new LowerFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 319;
				this.match(CustomColumnExpressionsParser.LOWER);
				this.state = 320;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 321;
				(_localctx as LowerFunctionContext)._stringValue = this.stringExpression();
				this.state = 322;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;
			case CustomColumnExpressionsParser.UPPER:
				_localctx = new UpperFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 324;
				this.match(CustomColumnExpressionsParser.UPPER);
				this.state = 325;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 326;
				(_localctx as UpperFunctionContext)._stringValue = this.stringExpression();
				this.state = 327;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;
			case CustomColumnExpressionsParser.LEFT:
				_localctx = new LeftFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 329;
				this.match(CustomColumnExpressionsParser.LEFT);
				this.state = 330;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 331;
				(_localctx as LeftFunctionContext)._text = this.stringExpression();
				this.state = 334;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CustomColumnExpressionsParser.COMMA) {
					{
					this.state = 332;
					this.match(CustomColumnExpressionsParser.COMMA);
					this.state = 333;
					(_localctx as LeftFunctionContext)._numChars = this.numericExpression(0);
					}
				}

				this.state = 336;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;
			case CustomColumnExpressionsParser.RIGHT:
				_localctx = new RightFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 338;
				this.match(CustomColumnExpressionsParser.RIGHT);
				this.state = 339;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 340;
				(_localctx as RightFunctionContext)._text = this.stringExpression();
				this.state = 343;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CustomColumnExpressionsParser.COMMA) {
					{
					this.state = 341;
					this.match(CustomColumnExpressionsParser.COMMA);
					this.state = 342;
					(_localctx as RightFunctionContext)._numChars = this.numericExpression(0);
					}
				}

				this.state = 345;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;
			case CustomColumnExpressionsParser.MID:
				_localctx = new MidFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 347;
				this.match(CustomColumnExpressionsParser.MID);
				this.state = 348;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 349;
				(_localctx as MidFunctionContext)._text = this.stringExpression();
				this.state = 350;
				this.match(CustomColumnExpressionsParser.COMMA);
				this.state = 351;
				(_localctx as MidFunctionContext)._startNum = this.numericExpression(0);
				this.state = 352;
				this.match(CustomColumnExpressionsParser.COMMA);
				this.state = 353;
				(_localctx as MidFunctionContext)._numChars = this.numericExpression(0);
				this.state = 354;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;
			case CustomColumnExpressionsParser.SUBSTITUTE:
				_localctx = new SubstituteFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 356;
				this.match(CustomColumnExpressionsParser.SUBSTITUTE);
				this.state = 357;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 358;
				(_localctx as SubstituteFunctionContext)._text = this.stringExpression();
				this.state = 359;
				this.match(CustomColumnExpressionsParser.COMMA);
				this.state = 360;
				(_localctx as SubstituteFunctionContext)._oldText = this.stringExpression();
				this.state = 361;
				this.match(CustomColumnExpressionsParser.COMMA);
				this.state = 362;
				(_localctx as SubstituteFunctionContext)._newText = this.stringExpression();
				this.state = 365;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CustomColumnExpressionsParser.COMMA) {
					{
					this.state = 363;
					this.match(CustomColumnExpressionsParser.COMMA);
					this.state = 364;
					(_localctx as SubstituteFunctionContext)._instanceNum = this.numericExpression(0);
					}
				}

				this.state = 367;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;
			case CustomColumnExpressionsParser.REPLACE:
				_localctx = new ReplaceFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 369;
				this.match(CustomColumnExpressionsParser.REPLACE);
				this.state = 370;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 371;
				(_localctx as ReplaceFunctionContext)._oldText = this.stringExpression();
				this.state = 372;
				this.match(CustomColumnExpressionsParser.COMMA);
				this.state = 373;
				(_localctx as ReplaceFunctionContext)._startNum = this.numericExpression(0);
				this.state = 374;
				this.match(CustomColumnExpressionsParser.COMMA);
				this.state = 375;
				(_localctx as ReplaceFunctionContext)._numChars = this.numericExpression(0);
				this.state = 376;
				this.match(CustomColumnExpressionsParser.COMMA);
				this.state = 377;
				(_localctx as ReplaceFunctionContext)._newText = this.stringExpression();
				this.state = 378;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;
			case CustomColumnExpressionsParser.IF:
				_localctx = new StringConditionExpContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 380;
				this.match(CustomColumnExpressionsParser.IF);
				this.state = 381;
				this.match(CustomColumnExpressionsParser.LPAREN);
				this.state = 382;
				(_localctx as StringConditionExpContext)._condition = this.booleanExpression();
				this.state = 383;
				this.match(CustomColumnExpressionsParser.COMMA);
				this.state = 384;
				(_localctx as StringConditionExpContext)._thenSection = this.stringExpression();
				this.state = 385;
				this.match(CustomColumnExpressionsParser.COMMA);
				this.state = 386;
				(_localctx as StringConditionExpContext)._elseSection = this.stringExpression();
				this.state = 387;
				this.match(CustomColumnExpressionsParser.RPAREN);
				}
				break;
			case CustomColumnExpressionsParser.DATE_VALUE:
			case CustomColumnExpressionsParser.STRING_VALUE:
				_localctx = new StringValueContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 389;
				_la = this._input.LA(1);
				if (!(_la === CustomColumnExpressionsParser.DATE_VALUE || _la === CustomColumnExpressionsParser.STRING_VALUE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case CustomColumnExpressionsParser.COLUMN_NAME:
				_localctx = new StringColumnNameContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 390;
				this.match(CustomColumnExpressionsParser.COLUMN_NAME);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.numericExpression_sempred(_localctx as NumericExpressionContext, predIndex);
		}
		return true;
	}
	private numericExpression_sempred(_localctx: NumericExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 21);

		case 1:
			return this.precpred(this._ctx, 20);

		case 2:
			return this.precpred(this._ctx, 19);

		case 3:
			return this.precpred(this._ctx, 18);

		case 4:
			return this.precpred(this._ctx, 17);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x038\u018C\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02\x12\n\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x1E" +
		"\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x05\x03:\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03H\n\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03Q\n\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x05\x03p\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03~\n\x03\x03\x03\x03\x03" +
		"\x05\x03\x82\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07" +
		"\x03\x93\n\x03\f\x03\x0E\x03\x96\v\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x06\x04\xD6\n\x04\r\x04\x0E\x04\xD7\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x06\x04\xE1\n\x04" +
		"\r\x04\x0E\x04\xE2\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x06\x04\xEC\n\x04\r\x04\x0E\x04\xED\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x06\x04" +
		"\xFC\n\x04\r\x04\x0E\x04\xFD\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\u010D" +
		"\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0114\n\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0126\n\x05" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u012D\n\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\u0136\n\x06\f\x06" +
		"\x0E\x06\u0139\v\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u0151\n\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u015A" +
		"\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x05\x06\u0170\n\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x05\x06\u018A\n\x06\x03\x06\x02\x02\x03\x04\x07\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\x02\x03\x04\x020033\x02\u01D4\x02\x11" +
		"\x03\x02\x02\x02\x04\x81\x03\x02\x02\x02\x06\u010C\x03\x02\x02\x02\b\u0125" +
		"\x03\x02\x02\x02\n\u0189\x03\x02\x02\x02\f\x12\x072\x02\x02\r\x12\x05" +
		"\x06\x04\x02\x0E\x12\x05\x04\x03\x02\x0F\x12\x05\b\x05\x02\x10\x12\x05" +
		"\n\x06\x02\x11\f\x03\x02\x02\x02\x11\r\x03\x02\x02\x02\x11\x0E\x03\x02" +
		"\x02\x02\x11\x0F\x03\x02\x02\x02\x11\x10\x03\x02\x02\x02\x12\x03\x03\x02" +
		"\x02\x02\x13\x14\b\x03\x01\x02\x14\x15\x074\x02\x02\x15\x16\x05\x04\x03" +
		"\x02\x16\x17\x075\x02\x02\x17\x82\x03\x02\x02\x02\x18\x19\x07\x1C\x02" +
		"\x02\x19\x1A\x074\x02\x02\x1A\x1D\x05\n\x06\x02\x1B\x1C\x076\x02\x02\x1C" +
		"\x1E\x05\x04\x03\x02\x1D\x1B\x03\x02\x02\x02\x1D\x1E\x03\x02\x02\x02\x1E" +
		"\x1F\x03\x02\x02\x02\x1F \x075\x02\x02 \x82\x03\x02\x02\x02!\"\x07\x19" +
		"\x02\x02\"#\x074\x02\x02#$\x05\x04\x03\x02$%\x076\x02\x02%&\x05\x04\x03" +
		"\x02&\'\x075\x02\x02\'\x82\x03\x02\x02\x02()\x07\x1A\x02\x02)*\x074\x02" +
		"\x02*+\x05\x04\x03\x02+,\x075\x02\x02,\x82\x03\x02\x02\x02-.\x07\x10\x02" +
		"\x02./\x074\x02\x02/0\x05\n\x06\x0201\x075\x02\x021\x82\x03\x02\x02\x02" +
		"23\x07$\x02\x0234\x074\x02\x0245\x05\n\x06\x0256\x076\x02\x0269\x05\n" +
		"\x06\x0278\x076\x02\x028:\x05\x04\x03\x0297\x03\x02\x02\x029:\x03\x02" +
		"\x02\x02:;\x03\x02\x02\x02;<\x075\x02\x02<\x82\x03\x02\x02\x02=>\x07\x1D" +
		"\x02\x02>?\x074\x02\x02?@\x05\b\x05\x02@A\x075\x02\x02A\x82\x03\x02\x02" +
		"\x02BC\x07\x1E\x02\x02CD\x074\x02\x02DG\x05\b\x05\x02EF\x076\x02\x02F" +
		"H\x05\x04\x03\x02GE\x03\x02\x02\x02GH\x03\x02\x02\x02HI\x03\x02\x02\x02" +
		"IJ\x075\x02\x02J\x82\x03\x02\x02\x02KL\x07\x1F\x02\x02LM\x074\x02\x02" +
		"MP\x05\b\x05\x02NO\x076\x02\x02OQ\x05\x04\x03\x02PN\x03\x02\x02\x02PQ" +
		"\x03\x02\x02\x02QR\x03\x02\x02\x02RS\x075\x02\x02S\x82\x03\x02\x02\x02" +
		"TU\x07 \x02\x02UV\x074\x02\x02VW\x05\b\x05\x02WX\x075\x02\x02X\x82\x03" +
		"\x02\x02\x02YZ\x07!\x02\x02Z[\x074\x02\x02[\\\x05\b\x05\x02\\]\x075\x02" +
		"\x02]\x82\x03\x02\x02\x02^_\x07\"\x02\x02_`\x074\x02\x02`a\x05\b\x05\x02" +
		"ab\x075\x02\x02b\x82\x03\x02\x02\x02cd\x07#\x02\x02de\x074\x02\x02ef\x05" +
		"\b\x05\x02fg\x075\x02\x02g\x82\x03\x02\x02\x02hi\x07\x1B\x02\x02ij\x07" +
		"4\x02\x02jk\x05\b\x05\x02kl\x076\x02\x02lo\x05\b\x05\x02mn\x076\x02\x02" +
		"np\x05\n\x06\x02om\x03\x02\x02\x02op\x03\x02\x02\x02pq\x03\x02\x02\x02" +
		"qr\x075\x02\x02r\x82\x03\x02\x02\x02st\x07-\x02\x02tu\x074\x02\x02uv\x05" +
		"\x06\x04\x02vw\x076\x02\x02wx\x05\x04\x03\x02xy\x076\x02\x02yz\x05\x04" +
		"\x03\x02z{\x075\x02\x02{\x82\x03\x02\x02\x02|~\x07\x06\x02\x02}|\x03\x02" +
		"\x02\x02}~\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x82\x071\x02\x02\x80" +
		"\x82\x072\x02\x02\x81\x13\x03\x02\x02\x02\x81\x18\x03\x02\x02\x02\x81" +
		"!\x03\x02\x02\x02\x81(\x03\x02\x02\x02\x81-\x03\x02\x02\x02\x812\x03\x02" +
		"\x02\x02\x81=\x03\x02\x02\x02\x81B\x03\x02\x02\x02\x81K\x03\x02\x02\x02" +
		"\x81T\x03\x02\x02\x02\x81Y\x03\x02\x02\x02\x81^\x03\x02\x02\x02\x81c\x03" +
		"\x02\x02\x02\x81h\x03\x02\x02\x02\x81s\x03\x02\x02\x02\x81}\x03\x02\x02" +
		"\x02\x81\x80\x03\x02\x02\x02\x82\x94\x03\x02\x02\x02\x83\x84\f\x17\x02" +
		"\x02\x84\x85\x07\r\x02\x02\x85\x93\x05\x04\x03\x17\x86\x87\f\x16\x02\x02" +
		"\x87\x88\x07\x03\x02\x02\x88\x93\x05\x04\x03\x17\x89\x8A\f\x15\x02\x02" +
		"\x8A\x8B\x07\x04\x02\x02\x8B\x93\x05\x04\x03\x16\x8C\x8D\f\x14\x02\x02" +
		"\x8D\x8E\x07\x05\x02\x02\x8E\x93\x05\x04\x03\x15\x8F\x90\f\x13\x02\x02" +
		"\x90\x91\x07\x06\x02\x02\x91\x93\x05\x04\x03\x14\x92\x83\x03\x02\x02\x02" +
		"\x92\x86\x03\x02\x02\x02\x92\x89\x03\x02\x02\x02\x92\x8C\x03\x02\x02\x02" +
		"\x92\x8F\x03\x02\x02\x02\x93\x96\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02" +
		"\x94\x95\x03\x02\x02\x02\x95\x05\x03\x02\x02\x02\x96\x94\x03\x02\x02\x02" +
		"\x97\x98\x074\x02\x02\x98\x99\x05\x06\x04\x02\x99\x9A\x075\x02\x02\x9A" +
		"\u010D\x03\x02\x02\x02\x9B\x9C\x05\x04\x03\x02\x9C\x9D\x07\x07\x02\x02" +
		"\x9D\x9E\x05\x04\x03\x02\x9E\u010D\x03\x02\x02\x02\x9F\xA0\x05\x04\x03" +
		"\x02\xA0\xA1\x07\b\x02\x02\xA1\xA2\x05\x04\x03\x02\xA2\u010D\x03\x02\x02" +
		"\x02\xA3\xA4\x05\x04\x03\x02\xA4\xA5\x07\t\x02\x02\xA5\xA6\x05\x04\x03" +
		"\x02\xA6\u010D\x03\x02\x02\x02\xA7\xA8\x05\x04\x03\x02\xA8\xA9\x07\n\x02" +
		"\x02\xA9\xAA\x05\x04\x03\x02\xAA\u010D\x03\x02\x02\x02\xAB\xAC\x05\x04" +
		"\x03\x02\xAC\xAD\x07\v\x02\x02\xAD\xAE\x05\x04\x03\x02\xAE\u010D\x03\x02" +
		"\x02\x02\xAF\xB0\x05\x04\x03\x02\xB0\xB1\x07\f\x02\x02\xB1\xB2\x05\x04" +
		"\x03\x02\xB2\u010D\x03\x02\x02\x02\xB3\xB4\x05\b\x05\x02\xB4\xB5\x07\x07" +
		"\x02\x02\xB5\xB6\x05\b\x05\x02\xB6\u010D\x03\x02\x02\x02\xB7\xB8\x05\b" +
		"\x05\x02\xB8\xB9\x07\b\x02\x02\xB9\xBA\x05\b\x05\x02\xBA\u010D\x03\x02" +
		"\x02\x02\xBB\xBC\x05\b\x05\x02\xBC\xBD\x07\t\x02\x02\xBD\xBE\x05\b\x05" +
		"\x02\xBE\u010D\x03\x02\x02\x02\xBF\xC0\x05\b\x05\x02\xC0\xC1\x07\n\x02" +
		"\x02\xC1\xC2\x05\b\x05\x02\xC2\u010D\x03\x02\x02\x02\xC3\xC4\x05\b\x05" +
		"\x02\xC4\xC5\x07\v\x02\x02\xC5\xC6\x05\b\x05\x02\xC6\u010D\x03\x02\x02" +
		"\x02\xC7\xC8\x05\b\x05\x02\xC8\xC9\x07\f\x02\x02\xC9\xCA\x05\b\x05\x02" +
		"\xCA\u010D\x03\x02\x02\x02\xCB\xCC\x07*\x02\x02\xCC\xCD\x074\x02\x02\xCD" +
		"\xCE\x05\x02\x02\x02\xCE\xCF\x075\x02\x02\xCF\u010D\x03\x02\x02\x02\xD0" +
		"\xD1\x07%\x02\x02\xD1\xD2\x074\x02\x02\xD2\xD5\x05\x06\x04\x02\xD3\xD4" +
		"\x076\x02\x02\xD4\xD6\x05\x06\x04\x02\xD5\xD3\x03\x02\x02\x02\xD6\xD7" +
		"\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xD9" +
		"\x03\x02\x02\x02\xD9\xDA\x075\x02\x02\xDA\u010D\x03\x02\x02\x02\xDB\xDC" +
		"\x07&\x02\x02\xDC\xDD\x074\x02\x02\xDD\xE0\x05\x06\x04\x02\xDE\xDF\x07" +
		"6\x02\x02\xDF\xE1\x05\x06\x04\x02\xE0\xDE\x03\x02\x02\x02\xE1\xE2\x03" +
		"\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE4\x03" +
		"\x02\x02\x02\xE4\xE5\x075\x02\x02\xE5\u010D\x03\x02\x02\x02\xE6\xE7\x07" +
		"\'\x02\x02\xE7\xE8\x074\x02\x02\xE8\xEB\x05\x06\x04\x02\xE9\xEA\x076\x02" +
		"\x02\xEA\xEC\x05\x06\x04\x02\xEB\xE9\x03\x02\x02\x02\xEC\xED\x03\x02\x02" +
		"\x02\xED\xEB\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xEF\x03\x02\x02" +
		"\x02\xEF\xF0\x075\x02\x02\xF0\u010D\x03\x02\x02\x02\xF1\xF2\x07(\x02\x02" +
		"\xF2\xF3\x074\x02\x02\xF3\xF4\x05\x06\x04\x02\xF4\xF5\x075\x02\x02\xF5" +
		"\u010D\x03\x02\x02\x02\xF6\xF7\x07)\x02\x02\xF7\xF8\x074\x02\x02\xF8\xFB" +
		"\x05\n\x06\x02\xF9\xFA\x076\x02\x02\xFA\xFC\x05\n\x06\x02\xFB\xF9\x03" +
		"\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFD\xFE\x03" +
		"\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0100\x075\x02\x02\u0100\u010D" +
		"\x03\x02\x02\x02\u0101\u0102\x07-\x02\x02\u0102\u0103\x074\x02\x02\u0103" +
		"\u0104\x05\x06\x04\x02\u0104\u0105\x076\x02\x02\u0105\u0106\x05\x06\x04" +
		"\x02\u0106\u0107\x076\x02\x02\u0107\u0108\x05\x06\x04\x02\u0108\u0109" +
		"\x075\x02\x02\u0109\u010D\x03\x02\x02\x02\u010A\u010D\x07.\x02\x02\u010B" +
		"\u010D\x072\x02\x02\u010C\x97\x03\x02\x02\x02\u010C\x9B\x03\x02\x02\x02" +
		"\u010C\x9F\x03\x02\x02\x02\u010C\xA3\x03\x02\x02\x02\u010C\xA7\x03\x02" +
		"\x02\x02\u010C\xAB\x03\x02\x02\x02\u010C\xAF\x03\x02\x02\x02\u010C\xB3" +
		"\x03\x02\x02\x02\u010C\xB7\x03\x02\x02\x02\u010C\xBB\x03\x02\x02\x02\u010C" +
		"\xBF\x03\x02\x02\x02\u010C\xC3\x03\x02\x02\x02\u010C\xC7\x03\x02\x02\x02" +
		"\u010C\xCB\x03\x02\x02\x02\u010C\xD0\x03\x02\x02\x02\u010C\xDB\x03\x02" +
		"\x02\x02\u010C\xE6\x03\x02\x02\x02\u010C\xF1\x03\x02\x02\x02\u010C\xF6" +
		"\x03\x02\x02\x02\u010C\u0101\x03\x02\x02\x02\u010C\u010A\x03\x02\x02\x02" +
		"\u010C\u010B\x03\x02\x02\x02\u010D\x07\x03\x02\x02\x02\u010E\u010F\x07" +
		",\x02\x02\u010F\u0110\x074\x02\x02\u0110\u0113\x05\n\x06\x02\u0111\u0112" +
		"\x076\x02\x02\u0112\u0114\x05\n\x06\x02\u0113\u0111\x03\x02\x02\x02\u0113" +
		"\u0114\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0116\x075\x02" +
		"\x02\u0116\u0126\x03\x02\x02\x02\u0117\u0118\x07+\x02\x02\u0118\u0119" +
		"\x074\x02\x02\u0119\u0126\x075\x02\x02\u011A\u011B\x07-\x02\x02\u011B" +
		"\u011C\x074\x02\x02\u011C\u011D\x05\x06\x04\x02\u011D\u011E\x076\x02\x02" +
		"\u011E\u011F\x05\b\x05\x02\u011F\u0120\x076\x02\x02\u0120\u0121\x05\b" +
		"\x05\x02\u0121\u0122\x075\x02\x02\u0122\u0126\x03\x02\x02\x02\u0123\u0126" +
		"\x070\x02\x02\u0124\u0126\x072\x02\x02\u0125\u010E\x03\x02\x02\x02\u0125" +
		"\u0117\x03\x02\x02\x02\u0125\u011A\x03\x02\x02\x02\u0125\u0123\x03\x02" +
		"\x02\x02\u0125\u0124\x03\x02\x02\x02\u0126\t\x03\x02\x02\x02\u0127\u0128" +
		"\x07\x11\x02\x02\u0128\u0129\x074\x02\x02\u0129\u012C\x05\x02\x02\x02" +
		"\u012A\u012B\x076\x02\x02\u012B\u012D\x05\n\x06\x02\u012C\u012A\x03\x02" +
		"\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E" +
		"\u012F\x075\x02\x02\u012F\u018A\x03\x02\x02\x02\u0130\u0131\x07\x0E\x02" +
		"\x02\u0131\u0132\x074\x02\x02\u0132\u0137\x05\n\x06\x02\u0133\u0134\x07" +
		"6\x02\x02\u0134\u0136\x05\n\x06\x02\u0135\u0133\x03\x02\x02\x02\u0136" +
		"\u0139\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0137\u0138\x03\x02" +
		"\x02\x02\u0138\u013A\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u013A" +
		"\u013B\x075\x02\x02\u013B\u018A\x03\x02\x02\x02\u013C\u013D\x07\x0F\x02" +
		"\x02\u013D\u013E\x074\x02\x02\u013E\u013F\x05\n\x06\x02\u013F\u0140\x07" +
		"5\x02\x02\u0140\u018A\x03\x02\x02\x02\u0141\u0142\x07\x12\x02\x02\u0142" +
		"\u0143\x074\x02\x02\u0143\u0144\x05\n\x06\x02\u0144\u0145\x075\x02\x02" +
		"\u0145\u018A\x03\x02\x02\x02\u0146\u0147\x07\x13\x02\x02\u0147\u0148\x07" +
		"4\x02\x02\u0148\u0149\x05\n\x06\x02\u0149\u014A\x075\x02\x02\u014A\u018A" +
		"\x03\x02\x02\x02\u014B\u014C\x07\x14\x02\x02\u014C\u014D\x074\x02\x02" +
		"\u014D\u0150\x05\n\x06\x02\u014E\u014F\x076\x02\x02\u014F\u0151\x05\x04" +
		"\x03\x02\u0150\u014E\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151" +
		"\u0152\x03\x02\x02\x02\u0152\u0153\x075\x02\x02\u0153\u018A\x03\x02\x02" +
		"\x02\u0154\u0155\x07\x15\x02\x02\u0155\u0156\x074\x02\x02\u0156\u0159" +
		"\x05\n\x06\x02\u0157\u0158\x076\x02\x02\u0158\u015A\x05\x04\x03\x02\u0159" +
		"\u0157\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015B\x03\x02" +
		"\x02\x02\u015B\u015C\x075\x02\x02\u015C\u018A\x03\x02\x02\x02\u015D\u015E" +
		"\x07\x16\x02\x02\u015E\u015F\x074\x02\x02\u015F\u0160\x05\n\x06\x02\u0160" +
		"\u0161\x076\x02\x02\u0161\u0162\x05\x04\x03\x02\u0162\u0163\x076\x02\x02" +
		"\u0163\u0164\x05\x04\x03\x02\u0164\u0165\x075\x02\x02\u0165\u018A\x03" +
		"\x02\x02\x02\u0166\u0167\x07\x17\x02\x02\u0167\u0168\x074\x02\x02\u0168" +
		"\u0169\x05\n\x06\x02\u0169\u016A\x076\x02\x02\u016A\u016B\x05\n\x06\x02" +
		"\u016B\u016C\x076\x02\x02\u016C\u016F\x05\n\x06\x02\u016D\u016E\x076\x02" +
		"\x02\u016E\u0170\x05\x04\x03\x02\u016F\u016D\x03\x02\x02\x02\u016F\u0170" +
		"\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171\u0172\x075\x02\x02" +
		"\u0172\u018A\x03\x02\x02\x02\u0173\u0174\x07\x18\x02\x02\u0174\u0175\x07" +
		"4\x02\x02\u0175\u0176\x05\n\x06\x02\u0176\u0177\x076\x02\x02\u0177\u0178" +
		"\x05\x04\x03\x02\u0178\u0179\x076\x02\x02\u0179\u017A\x05\x04\x03\x02" +
		"\u017A\u017B\x076\x02\x02\u017B\u017C\x05\n\x06\x02\u017C\u017D\x075\x02" +
		"\x02\u017D\u018A\x03\x02\x02\x02\u017E\u017F\x07-\x02\x02\u017F\u0180" +
		"\x074\x02\x02\u0180\u0181\x05\x06\x04\x02\u0181\u0182\x076\x02\x02\u0182" +
		"\u0183\x05\n\x06\x02\u0183\u0184\x076\x02\x02\u0184\u0185\x05\n\x06\x02" +
		"\u0185\u0186\x075\x02\x02\u0186\u018A\x03\x02\x02\x02\u0187\u018A\t\x02" +
		"\x02\x02\u0188\u018A\x072\x02\x02\u0189\u0127\x03\x02\x02\x02\u0189\u0130" +
		"\x03\x02\x02\x02\u0189\u013C\x03\x02\x02\x02\u0189\u0141\x03\x02\x02\x02" +
		"\u0189\u0146\x03\x02\x02\x02\u0189\u014B\x03\x02\x02\x02\u0189\u0154\x03" +
		"\x02\x02\x02\u0189\u015D\x03\x02\x02\x02\u0189\u0166\x03\x02\x02\x02\u0189" +
		"\u0173\x03\x02\x02\x02\u0189\u017E\x03\x02\x02\x02\u0189\u0187\x03\x02" +
		"\x02\x02\u0189\u0188\x03\x02\x02\x02\u018A\v\x03\x02\x02\x02\x19\x11\x1D" +
		"9GPo}\x81\x92\x94\xD7\xE2\xED\xFD\u010C\u0113\u0125\u012C\u0137\u0150" +
		"\u0159\u016F\u0189";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CustomColumnExpressionsParser.__ATN) {
			CustomColumnExpressionsParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CustomColumnExpressionsParser._serializedATN));
		}

		return CustomColumnExpressionsParser.__ATN;
	}

}

export class ObjectExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CustomColumnExpressionsParser.RULE_objectExpression; }
	public copyFrom(ctx: ObjectExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ColumnNameContext extends ObjectExpressionContext {
	public COLUMN_NAME(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.COLUMN_NAME, 0); }
	constructor(ctx: ObjectExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterColumnName) {
			listener.enterColumnName(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitColumnName) {
			listener.exitColumnName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitColumnName) {
			return visitor.visitColumnName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanExpContext extends ObjectExpressionContext {
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(ctx: ObjectExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterBooleanExp) {
			listener.enterBooleanExp(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitBooleanExp) {
			listener.exitBooleanExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitBooleanExp) {
			return visitor.visitBooleanExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumericExpContext extends ObjectExpressionContext {
	public numericExpression(): NumericExpressionContext {
		return this.getRuleContext(0, NumericExpressionContext);
	}
	constructor(ctx: ObjectExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterNumericExp) {
			listener.enterNumericExp(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitNumericExp) {
			listener.exitNumericExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitNumericExp) {
			return visitor.visitNumericExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DateExpContext extends ObjectExpressionContext {
	public dateExpression(): DateExpressionContext {
		return this.getRuleContext(0, DateExpressionContext);
	}
	constructor(ctx: ObjectExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterDateExp) {
			listener.enterDateExp(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitDateExp) {
			listener.exitDateExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitDateExp) {
			return visitor.visitDateExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringExpContext extends ObjectExpressionContext {
	public stringExpression(): StringExpressionContext {
		return this.getRuleContext(0, StringExpressionContext);
	}
	constructor(ctx: ObjectExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterStringExp) {
			listener.enterStringExp(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitStringExp) {
			listener.exitStringExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitStringExp) {
			return visitor.visitStringExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumericExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CustomColumnExpressionsParser.RULE_numericExpression; }
	public copyFrom(ctx: NumericExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class NumericParenthesisContext extends NumericExpressionContext {
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public numericExpression(): NumericExpressionContext {
		return this.getRuleContext(0, NumericExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	constructor(ctx: NumericExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterNumericParenthesis) {
			listener.enterNumericParenthesis(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitNumericParenthesis) {
			listener.exitNumericParenthesis(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitNumericParenthesis) {
			return visitor.visitNumericParenthesis(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PowerExpContext extends NumericExpressionContext {
	public _number!: NumericExpressionContext;
	public _exponent!: NumericExpressionContext;
	public CIRCUMFLEX(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.CIRCUMFLEX, 0); }
	public numericExpression(): NumericExpressionContext[];
	public numericExpression(i: number): NumericExpressionContext;
	public numericExpression(i?: number): NumericExpressionContext | NumericExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumericExpressionContext);
		} else {
			return this.getRuleContext(i, NumericExpressionContext);
		}
	}
	constructor(ctx: NumericExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterPowerExp) {
			listener.enterPowerExp(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitPowerExp) {
			listener.exitPowerExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitPowerExp) {
			return visitor.visitPowerExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplyExpContext extends NumericExpressionContext {
	public _multiplier!: NumericExpressionContext;
	public _multiplicand!: NumericExpressionContext;
	public ASTERISK(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.ASTERISK, 0); }
	public numericExpression(): NumericExpressionContext[];
	public numericExpression(i: number): NumericExpressionContext;
	public numericExpression(i?: number): NumericExpressionContext | NumericExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumericExpressionContext);
		} else {
			return this.getRuleContext(i, NumericExpressionContext);
		}
	}
	constructor(ctx: NumericExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterMultiplyExp) {
			listener.enterMultiplyExp(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitMultiplyExp) {
			listener.exitMultiplyExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitMultiplyExp) {
			return visitor.visitMultiplyExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DivisionExpContext extends NumericExpressionContext {
	public _dividend!: NumericExpressionContext;
	public _divisor!: NumericExpressionContext;
	public SLASH(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.SLASH, 0); }
	public numericExpression(): NumericExpressionContext[];
	public numericExpression(i: number): NumericExpressionContext;
	public numericExpression(i?: number): NumericExpressionContext | NumericExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumericExpressionContext);
		} else {
			return this.getRuleContext(i, NumericExpressionContext);
		}
	}
	constructor(ctx: NumericExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterDivisionExp) {
			listener.enterDivisionExp(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitDivisionExp) {
			listener.exitDivisionExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitDivisionExp) {
			return visitor.visitDivisionExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditionExpContext extends NumericExpressionContext {
	public _augent!: NumericExpressionContext;
	public _addent!: NumericExpressionContext;
	public PLUS(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.PLUS, 0); }
	public numericExpression(): NumericExpressionContext[];
	public numericExpression(i: number): NumericExpressionContext;
	public numericExpression(i?: number): NumericExpressionContext | NumericExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumericExpressionContext);
		} else {
			return this.getRuleContext(i, NumericExpressionContext);
		}
	}
	constructor(ctx: NumericExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterAdditionExp) {
			listener.enterAdditionExp(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitAdditionExp) {
			listener.exitAdditionExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitAdditionExp) {
			return visitor.visitAdditionExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubtractionExpContext extends NumericExpressionContext {
	public _minuend!: NumericExpressionContext;
	public _subtrahend!: NumericExpressionContext;
	public MINUS(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.MINUS, 0); }
	public numericExpression(): NumericExpressionContext[];
	public numericExpression(i: number): NumericExpressionContext;
	public numericExpression(i?: number): NumericExpressionContext | NumericExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumericExpressionContext);
		} else {
			return this.getRuleContext(i, NumericExpressionContext);
		}
	}
	constructor(ctx: NumericExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterSubtractionExp) {
			listener.enterSubtractionExp(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitSubtractionExp) {
			listener.exitSubtractionExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitSubtractionExp) {
			return visitor.visitSubtractionExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ToNumericFunctionContext extends NumericExpressionContext {
	public _string!: StringExpressionContext;
	public _scale!: NumericExpressionContext;
	public TO_NUMERIC(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.TO_NUMERIC, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public stringExpression(): StringExpressionContext {
		return this.getRuleContext(0, StringExpressionContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CustomColumnExpressionsParser.COMMA, 0); }
	public numericExpression(): NumericExpressionContext | undefined {
		return this.tryGetRuleContext(0, NumericExpressionContext);
	}
	constructor(ctx: NumericExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterToNumericFunction) {
			listener.enterToNumericFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitToNumericFunction) {
			listener.exitToNumericFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitToNumericFunction) {
			return visitor.visitToNumericFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ModFunctionContext extends NumericExpressionContext {
	public _dividend!: NumericExpressionContext;
	public _divisor!: NumericExpressionContext;
	public MOD(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.MOD, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public COMMA(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.COMMA, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public numericExpression(): NumericExpressionContext[];
	public numericExpression(i: number): NumericExpressionContext;
	public numericExpression(i?: number): NumericExpressionContext | NumericExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumericExpressionContext);
		} else {
			return this.getRuleContext(i, NumericExpressionContext);
		}
	}
	constructor(ctx: NumericExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterModFunction) {
			listener.enterModFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitModFunction) {
			listener.exitModFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitModFunction) {
			return visitor.visitModFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AbsFunctionContext extends NumericExpressionContext {
	public _number!: NumericExpressionContext;
	public ABS(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.ABS, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public numericExpression(): NumericExpressionContext {
		return this.getRuleContext(0, NumericExpressionContext);
	}
	constructor(ctx: NumericExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterAbsFunction) {
			listener.enterAbsFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitAbsFunction) {
			listener.exitAbsFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitAbsFunction) {
			return visitor.visitAbsFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LenghtFunctionContext extends NumericExpressionContext {
	public _string!: StringExpressionContext;
	public LEN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LEN, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public stringExpression(): StringExpressionContext {
		return this.getRuleContext(0, StringExpressionContext);
	}
	constructor(ctx: NumericExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterLenghtFunction) {
			listener.enterLenghtFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitLenghtFunction) {
			listener.exitLenghtFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitLenghtFunction) {
			return visitor.visitLenghtFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FindFunctionContext extends NumericExpressionContext {
	public _findText!: StringExpressionContext;
	public _withinText!: StringExpressionContext;
	public _startNum!: NumericExpressionContext;
	public FIND(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.FIND, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CustomColumnExpressionsParser.COMMA);
		} else {
			return this.getToken(CustomColumnExpressionsParser.COMMA, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public stringExpression(): StringExpressionContext[];
	public stringExpression(i: number): StringExpressionContext;
	public stringExpression(i?: number): StringExpressionContext | StringExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringExpressionContext);
		} else {
			return this.getRuleContext(i, StringExpressionContext);
		}
	}
	public numericExpression(): NumericExpressionContext | undefined {
		return this.tryGetRuleContext(0, NumericExpressionContext);
	}
	constructor(ctx: NumericExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterFindFunction) {
			listener.enterFindFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitFindFunction) {
			listener.exitFindFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitFindFunction) {
			return visitor.visitFindFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DayFunctionContext extends NumericExpressionContext {
	public _date!: DateExpressionContext;
	public DAY(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.DAY, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public dateExpression(): DateExpressionContext {
		return this.getRuleContext(0, DateExpressionContext);
	}
	constructor(ctx: NumericExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterDayFunction) {
			listener.enterDayFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitDayFunction) {
			listener.exitDayFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitDayFunction) {
			return visitor.visitDayFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WeekFunctionContext extends NumericExpressionContext {
	public _date!: DateExpressionContext;
	public _returnType!: NumericExpressionContext;
	public WEEK(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.WEEK, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public dateExpression(): DateExpressionContext {
		return this.getRuleContext(0, DateExpressionContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CustomColumnExpressionsParser.COMMA, 0); }
	public numericExpression(): NumericExpressionContext | undefined {
		return this.tryGetRuleContext(0, NumericExpressionContext);
	}
	constructor(ctx: NumericExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterWeekFunction) {
			listener.enterWeekFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitWeekFunction) {
			listener.exitWeekFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitWeekFunction) {
			return visitor.visitWeekFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WeekDayFunctionContext extends NumericExpressionContext {
	public _date!: DateExpressionContext;
	public _returnType!: NumericExpressionContext;
	public WEEKDAY(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.WEEKDAY, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public dateExpression(): DateExpressionContext {
		return this.getRuleContext(0, DateExpressionContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CustomColumnExpressionsParser.COMMA, 0); }
	public numericExpression(): NumericExpressionContext | undefined {
		return this.tryGetRuleContext(0, NumericExpressionContext);
	}
	constructor(ctx: NumericExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterWeekDayFunction) {
			listener.enterWeekDayFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitWeekDayFunction) {
			listener.exitWeekDayFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitWeekDayFunction) {
			return visitor.visitWeekDayFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MonthFunctionContext extends NumericExpressionContext {
	public _date!: DateExpressionContext;
	public MONTH(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.MONTH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public dateExpression(): DateExpressionContext {
		return this.getRuleContext(0, DateExpressionContext);
	}
	constructor(ctx: NumericExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterMonthFunction) {
			listener.enterMonthFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitMonthFunction) {
			listener.exitMonthFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitMonthFunction) {
			return visitor.visitMonthFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class YearFunctionContext extends NumericExpressionContext {
	public _date!: DateExpressionContext;
	public YEAR(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.YEAR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public dateExpression(): DateExpressionContext {
		return this.getRuleContext(0, DateExpressionContext);
	}
	constructor(ctx: NumericExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterYearFunction) {
			listener.enterYearFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitYearFunction) {
			listener.exitYearFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitYearFunction) {
			return visitor.visitYearFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class HourFunctionContext extends NumericExpressionContext {
	public _date!: DateExpressionContext;
	public HOUR(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.HOUR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public dateExpression(): DateExpressionContext {
		return this.getRuleContext(0, DateExpressionContext);
	}
	constructor(ctx: NumericExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterHourFunction) {
			listener.enterHourFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitHourFunction) {
			listener.exitHourFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitHourFunction) {
			return visitor.visitHourFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MinuteFunctionContext extends NumericExpressionContext {
	public _date!: DateExpressionContext;
	public MINUTE(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.MINUTE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public dateExpression(): DateExpressionContext {
		return this.getRuleContext(0, DateExpressionContext);
	}
	constructor(ctx: NumericExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterMinuteFunction) {
			listener.enterMinuteFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitMinuteFunction) {
			listener.exitMinuteFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitMinuteFunction) {
			return visitor.visitMinuteFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DateDiffFunctionContext extends NumericExpressionContext {
	public _startDate!: DateExpressionContext;
	public _endDate!: DateExpressionContext;
	public _unit!: StringExpressionContext;
	public DATE_DIFF(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.DATE_DIFF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CustomColumnExpressionsParser.COMMA);
		} else {
			return this.getToken(CustomColumnExpressionsParser.COMMA, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public dateExpression(): DateExpressionContext[];
	public dateExpression(i: number): DateExpressionContext;
	public dateExpression(i?: number): DateExpressionContext | DateExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DateExpressionContext);
		} else {
			return this.getRuleContext(i, DateExpressionContext);
		}
	}
	public stringExpression(): StringExpressionContext | undefined {
		return this.tryGetRuleContext(0, StringExpressionContext);
	}
	constructor(ctx: NumericExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterDateDiffFunction) {
			listener.enterDateDiffFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitDateDiffFunction) {
			listener.exitDateDiffFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitDateDiffFunction) {
			return visitor.visitDateDiffFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumericConditionExpContext extends NumericExpressionContext {
	public _condition!: BooleanExpressionContext;
	public _thenSection!: NumericExpressionContext;
	public _elseSection!: NumericExpressionContext;
	public IF(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.IF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CustomColumnExpressionsParser.COMMA);
		} else {
			return this.getToken(CustomColumnExpressionsParser.COMMA, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	public numericExpression(): NumericExpressionContext[];
	public numericExpression(i: number): NumericExpressionContext;
	public numericExpression(i?: number): NumericExpressionContext | NumericExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumericExpressionContext);
		} else {
			return this.getRuleContext(i, NumericExpressionContext);
		}
	}
	constructor(ctx: NumericExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterNumericConditionExp) {
			listener.enterNumericConditionExp(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitNumericConditionExp) {
			listener.exitNumericConditionExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitNumericConditionExp) {
			return visitor.visitNumericConditionExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumericValueContext extends NumericExpressionContext {
	public _minus!: Token;
	public _value!: Token;
	public NUMERIC_VALUE(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.NUMERIC_VALUE, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(CustomColumnExpressionsParser.MINUS, 0); }
	constructor(ctx: NumericExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterNumericValue) {
			listener.enterNumericValue(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitNumericValue) {
			listener.exitNumericValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitNumericValue) {
			return visitor.visitNumericValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumericColumnNameContext extends NumericExpressionContext {
	public COLUMN_NAME(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.COLUMN_NAME, 0); }
	constructor(ctx: NumericExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterNumericColumnName) {
			listener.enterNumericColumnName(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitNumericColumnName) {
			listener.exitNumericColumnName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitNumericColumnName) {
			return visitor.visitNumericColumnName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CustomColumnExpressionsParser.RULE_booleanExpression; }
	public copyFrom(ctx: BooleanExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class LogicalParenthesisContext extends BooleanExpressionContext {
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterLogicalParenthesis) {
			listener.enterLogicalParenthesis(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitLogicalParenthesis) {
			listener.exitLogicalParenthesis(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitLogicalParenthesis) {
			return visitor.visitLogicalParenthesis(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumericEqualExpContext extends BooleanExpressionContext {
	public _left!: NumericExpressionContext;
	public _right!: NumericExpressionContext;
	public EQUAL(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.EQUAL, 0); }
	public numericExpression(): NumericExpressionContext[];
	public numericExpression(i: number): NumericExpressionContext;
	public numericExpression(i?: number): NumericExpressionContext | NumericExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumericExpressionContext);
		} else {
			return this.getRuleContext(i, NumericExpressionContext);
		}
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterNumericEqualExp) {
			listener.enterNumericEqualExp(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitNumericEqualExp) {
			listener.exitNumericEqualExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitNumericEqualExp) {
			return visitor.visitNumericEqualExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumericNotEqualExpContext extends BooleanExpressionContext {
	public _left!: NumericExpressionContext;
	public _right!: NumericExpressionContext;
	public NOT_EQUAL(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.NOT_EQUAL, 0); }
	public numericExpression(): NumericExpressionContext[];
	public numericExpression(i: number): NumericExpressionContext;
	public numericExpression(i?: number): NumericExpressionContext | NumericExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumericExpressionContext);
		} else {
			return this.getRuleContext(i, NumericExpressionContext);
		}
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterNumericNotEqualExp) {
			listener.enterNumericNotEqualExp(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitNumericNotEqualExp) {
			listener.exitNumericNotEqualExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitNumericNotEqualExp) {
			return visitor.visitNumericNotEqualExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumericGreaterThanExpContext extends BooleanExpressionContext {
	public _left!: NumericExpressionContext;
	public _right!: NumericExpressionContext;
	public GREATER_THAN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.GREATER_THAN, 0); }
	public numericExpression(): NumericExpressionContext[];
	public numericExpression(i: number): NumericExpressionContext;
	public numericExpression(i?: number): NumericExpressionContext | NumericExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumericExpressionContext);
		} else {
			return this.getRuleContext(i, NumericExpressionContext);
		}
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterNumericGreaterThanExp) {
			listener.enterNumericGreaterThanExp(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitNumericGreaterThanExp) {
			listener.exitNumericGreaterThanExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitNumericGreaterThanExp) {
			return visitor.visitNumericGreaterThanExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumericLessThanExpContext extends BooleanExpressionContext {
	public _left!: NumericExpressionContext;
	public _right!: NumericExpressionContext;
	public LESS_THAN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LESS_THAN, 0); }
	public numericExpression(): NumericExpressionContext[];
	public numericExpression(i: number): NumericExpressionContext;
	public numericExpression(i?: number): NumericExpressionContext | NumericExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumericExpressionContext);
		} else {
			return this.getRuleContext(i, NumericExpressionContext);
		}
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterNumericLessThanExp) {
			listener.enterNumericLessThanExp(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitNumericLessThanExp) {
			listener.exitNumericLessThanExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitNumericLessThanExp) {
			return visitor.visitNumericLessThanExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumericGreaterOrEqualExpContext extends BooleanExpressionContext {
	public _left!: NumericExpressionContext;
	public _right!: NumericExpressionContext;
	public GREATER_OR_EQUAL(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.GREATER_OR_EQUAL, 0); }
	public numericExpression(): NumericExpressionContext[];
	public numericExpression(i: number): NumericExpressionContext;
	public numericExpression(i?: number): NumericExpressionContext | NumericExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumericExpressionContext);
		} else {
			return this.getRuleContext(i, NumericExpressionContext);
		}
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterNumericGreaterOrEqualExp) {
			listener.enterNumericGreaterOrEqualExp(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitNumericGreaterOrEqualExp) {
			listener.exitNumericGreaterOrEqualExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitNumericGreaterOrEqualExp) {
			return visitor.visitNumericGreaterOrEqualExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumericLessOrEqualExpContext extends BooleanExpressionContext {
	public _left!: NumericExpressionContext;
	public _right!: NumericExpressionContext;
	public LESS_OR_EQUAL(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LESS_OR_EQUAL, 0); }
	public numericExpression(): NumericExpressionContext[];
	public numericExpression(i: number): NumericExpressionContext;
	public numericExpression(i?: number): NumericExpressionContext | NumericExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumericExpressionContext);
		} else {
			return this.getRuleContext(i, NumericExpressionContext);
		}
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterNumericLessOrEqualExp) {
			listener.enterNumericLessOrEqualExp(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitNumericLessOrEqualExp) {
			listener.exitNumericLessOrEqualExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitNumericLessOrEqualExp) {
			return visitor.visitNumericLessOrEqualExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DateEqualExpContext extends BooleanExpressionContext {
	public _left!: DateExpressionContext;
	public _right!: DateExpressionContext;
	public EQUAL(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.EQUAL, 0); }
	public dateExpression(): DateExpressionContext[];
	public dateExpression(i: number): DateExpressionContext;
	public dateExpression(i?: number): DateExpressionContext | DateExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DateExpressionContext);
		} else {
			return this.getRuleContext(i, DateExpressionContext);
		}
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterDateEqualExp) {
			listener.enterDateEqualExp(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitDateEqualExp) {
			listener.exitDateEqualExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitDateEqualExp) {
			return visitor.visitDateEqualExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DateNotEqualExpContext extends BooleanExpressionContext {
	public _left!: DateExpressionContext;
	public _right!: DateExpressionContext;
	public NOT_EQUAL(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.NOT_EQUAL, 0); }
	public dateExpression(): DateExpressionContext[];
	public dateExpression(i: number): DateExpressionContext;
	public dateExpression(i?: number): DateExpressionContext | DateExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DateExpressionContext);
		} else {
			return this.getRuleContext(i, DateExpressionContext);
		}
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterDateNotEqualExp) {
			listener.enterDateNotEqualExp(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitDateNotEqualExp) {
			listener.exitDateNotEqualExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitDateNotEqualExp) {
			return visitor.visitDateNotEqualExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DateGreaterThanExpContext extends BooleanExpressionContext {
	public _left!: DateExpressionContext;
	public _right!: DateExpressionContext;
	public GREATER_THAN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.GREATER_THAN, 0); }
	public dateExpression(): DateExpressionContext[];
	public dateExpression(i: number): DateExpressionContext;
	public dateExpression(i?: number): DateExpressionContext | DateExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DateExpressionContext);
		} else {
			return this.getRuleContext(i, DateExpressionContext);
		}
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterDateGreaterThanExp) {
			listener.enterDateGreaterThanExp(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitDateGreaterThanExp) {
			listener.exitDateGreaterThanExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitDateGreaterThanExp) {
			return visitor.visitDateGreaterThanExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DateLessThanExpContext extends BooleanExpressionContext {
	public _left!: DateExpressionContext;
	public _right!: DateExpressionContext;
	public LESS_THAN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LESS_THAN, 0); }
	public dateExpression(): DateExpressionContext[];
	public dateExpression(i: number): DateExpressionContext;
	public dateExpression(i?: number): DateExpressionContext | DateExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DateExpressionContext);
		} else {
			return this.getRuleContext(i, DateExpressionContext);
		}
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterDateLessThanExp) {
			listener.enterDateLessThanExp(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitDateLessThanExp) {
			listener.exitDateLessThanExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitDateLessThanExp) {
			return visitor.visitDateLessThanExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DateGreaterOrEqualExpContext extends BooleanExpressionContext {
	public _left!: DateExpressionContext;
	public _right!: DateExpressionContext;
	public GREATER_OR_EQUAL(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.GREATER_OR_EQUAL, 0); }
	public dateExpression(): DateExpressionContext[];
	public dateExpression(i: number): DateExpressionContext;
	public dateExpression(i?: number): DateExpressionContext | DateExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DateExpressionContext);
		} else {
			return this.getRuleContext(i, DateExpressionContext);
		}
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterDateGreaterOrEqualExp) {
			listener.enterDateGreaterOrEqualExp(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitDateGreaterOrEqualExp) {
			listener.exitDateGreaterOrEqualExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitDateGreaterOrEqualExp) {
			return visitor.visitDateGreaterOrEqualExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DateLessOrEqualExpContext extends BooleanExpressionContext {
	public _left!: DateExpressionContext;
	public _right!: DateExpressionContext;
	public LESS_OR_EQUAL(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LESS_OR_EQUAL, 0); }
	public dateExpression(): DateExpressionContext[];
	public dateExpression(i: number): DateExpressionContext;
	public dateExpression(i?: number): DateExpressionContext | DateExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DateExpressionContext);
		} else {
			return this.getRuleContext(i, DateExpressionContext);
		}
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterDateLessOrEqualExp) {
			listener.enterDateLessOrEqualExp(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitDateLessOrEqualExp) {
			listener.exitDateLessOrEqualExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitDateLessOrEqualExp) {
			return visitor.visitDateLessOrEqualExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ToBooleanFunctionContext extends BooleanExpressionContext {
	public _object!: ObjectExpressionContext;
	public TO_BOOL(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.TO_BOOL, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public objectExpression(): ObjectExpressionContext {
		return this.getRuleContext(0, ObjectExpressionContext);
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterToBooleanFunction) {
			listener.enterToBooleanFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitToBooleanFunction) {
			listener.exitToBooleanFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitToBooleanFunction) {
			return visitor.visitToBooleanFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndFunctionContext extends BooleanExpressionContext {
	public AND(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.AND, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public booleanExpression(): BooleanExpressionContext[];
	public booleanExpression(i: number): BooleanExpressionContext;
	public booleanExpression(i?: number): BooleanExpressionContext | BooleanExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanExpressionContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CustomColumnExpressionsParser.COMMA);
		} else {
			return this.getToken(CustomColumnExpressionsParser.COMMA, i);
		}
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterAndFunction) {
			listener.enterAndFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitAndFunction) {
			listener.exitAndFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitAndFunction) {
			return visitor.visitAndFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrFunctionContext extends BooleanExpressionContext {
	public OR(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.OR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public booleanExpression(): BooleanExpressionContext[];
	public booleanExpression(i: number): BooleanExpressionContext;
	public booleanExpression(i?: number): BooleanExpressionContext | BooleanExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanExpressionContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CustomColumnExpressionsParser.COMMA);
		} else {
			return this.getToken(CustomColumnExpressionsParser.COMMA, i);
		}
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterOrFunction) {
			listener.enterOrFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitOrFunction) {
			listener.exitOrFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitOrFunction) {
			return visitor.visitOrFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class XorFunctionContext extends BooleanExpressionContext {
	public XOR(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.XOR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public booleanExpression(): BooleanExpressionContext[];
	public booleanExpression(i: number): BooleanExpressionContext;
	public booleanExpression(i?: number): BooleanExpressionContext | BooleanExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanExpressionContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CustomColumnExpressionsParser.COMMA);
		} else {
			return this.getToken(CustomColumnExpressionsParser.COMMA, i);
		}
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterXorFunction) {
			listener.enterXorFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitXorFunction) {
			listener.exitXorFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitXorFunction) {
			return visitor.visitXorFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotFunctionContext extends BooleanExpressionContext {
	public NOT(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.NOT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterNotFunction) {
			listener.enterNotFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitNotFunction) {
			listener.exitNotFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitNotFunction) {
			return visitor.visitNotFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExactFunctionContext extends BooleanExpressionContext {
	public EXACT(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.EXACT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public stringExpression(): StringExpressionContext[];
	public stringExpression(i: number): StringExpressionContext;
	public stringExpression(i?: number): StringExpressionContext | StringExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringExpressionContext);
		} else {
			return this.getRuleContext(i, StringExpressionContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CustomColumnExpressionsParser.COMMA);
		} else {
			return this.getToken(CustomColumnExpressionsParser.COMMA, i);
		}
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterExactFunction) {
			listener.enterExactFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitExactFunction) {
			listener.exitExactFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitExactFunction) {
			return visitor.visitExactFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanConditionExpContext extends BooleanExpressionContext {
	public _condition!: BooleanExpressionContext;
	public _thenSection!: BooleanExpressionContext;
	public _elseSection!: BooleanExpressionContext;
	public IF(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.IF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CustomColumnExpressionsParser.COMMA);
		} else {
			return this.getToken(CustomColumnExpressionsParser.COMMA, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public booleanExpression(): BooleanExpressionContext[];
	public booleanExpression(i: number): BooleanExpressionContext;
	public booleanExpression(i?: number): BooleanExpressionContext | BooleanExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanExpressionContext);
		}
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterBooleanConditionExp) {
			listener.enterBooleanConditionExp(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitBooleanConditionExp) {
			listener.exitBooleanConditionExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitBooleanConditionExp) {
			return visitor.visitBooleanConditionExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanValueExpContext extends BooleanExpressionContext {
	public BOOLEAN_VALUE(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.BOOLEAN_VALUE, 0); }
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterBooleanValueExp) {
			listener.enterBooleanValueExp(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitBooleanValueExp) {
			listener.exitBooleanValueExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitBooleanValueExp) {
			return visitor.visitBooleanValueExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanColumnNameContext extends BooleanExpressionContext {
	public COLUMN_NAME(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.COLUMN_NAME, 0); }
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterBooleanColumnName) {
			listener.enterBooleanColumnName(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitBooleanColumnName) {
			listener.exitBooleanColumnName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitBooleanColumnName) {
			return visitor.visitBooleanColumnName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CustomColumnExpressionsParser.RULE_dateExpression; }
	public copyFrom(ctx: DateExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ToDateExpContext extends DateExpressionContext {
	public _string!: StringExpressionContext;
	public _format!: StringExpressionContext;
	public TO_DATE(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.TO_DATE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public stringExpression(): StringExpressionContext[];
	public stringExpression(i: number): StringExpressionContext;
	public stringExpression(i?: number): StringExpressionContext | StringExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringExpressionContext);
		} else {
			return this.getRuleContext(i, StringExpressionContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CustomColumnExpressionsParser.COMMA, 0); }
	constructor(ctx: DateExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterToDateExp) {
			listener.enterToDateExp(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitToDateExp) {
			listener.exitToDateExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitToDateExp) {
			return visitor.visitToDateExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NowFunctionContext extends DateExpressionContext {
	public NOW(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.NOW, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	constructor(ctx: DateExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterNowFunction) {
			listener.enterNowFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitNowFunction) {
			listener.exitNowFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitNowFunction) {
			return visitor.visitNowFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DateConditionExpContext extends DateExpressionContext {
	public _condition!: BooleanExpressionContext;
	public _thenSection!: DateExpressionContext;
	public _elseSection!: DateExpressionContext;
	public IF(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.IF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CustomColumnExpressionsParser.COMMA);
		} else {
			return this.getToken(CustomColumnExpressionsParser.COMMA, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	public dateExpression(): DateExpressionContext[];
	public dateExpression(i: number): DateExpressionContext;
	public dateExpression(i?: number): DateExpressionContext | DateExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DateExpressionContext);
		} else {
			return this.getRuleContext(i, DateExpressionContext);
		}
	}
	constructor(ctx: DateExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterDateConditionExp) {
			listener.enterDateConditionExp(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitDateConditionExp) {
			listener.exitDateConditionExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitDateConditionExp) {
			return visitor.visitDateConditionExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DateValueContext extends DateExpressionContext {
	public DATE_VALUE(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.DATE_VALUE, 0); }
	constructor(ctx: DateExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterDateValue) {
			listener.enterDateValue(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitDateValue) {
			listener.exitDateValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitDateValue) {
			return visitor.visitDateValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DateColumnNameContext extends DateExpressionContext {
	public COLUMN_NAME(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.COLUMN_NAME, 0); }
	constructor(ctx: DateExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterDateColumnName) {
			listener.enterDateColumnName(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitDateColumnName) {
			listener.exitDateColumnName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitDateColumnName) {
			return visitor.visitDateColumnName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CustomColumnExpressionsParser.RULE_stringExpression; }
	public copyFrom(ctx: StringExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ToStringFunctionContext extends StringExpressionContext {
	public _object!: ObjectExpressionContext;
	public _format!: StringExpressionContext;
	public TO_STRING(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.TO_STRING, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public objectExpression(): ObjectExpressionContext {
		return this.getRuleContext(0, ObjectExpressionContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CustomColumnExpressionsParser.COMMA, 0); }
	public stringExpression(): StringExpressionContext | undefined {
		return this.tryGetRuleContext(0, StringExpressionContext);
	}
	constructor(ctx: StringExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterToStringFunction) {
			listener.enterToStringFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitToStringFunction) {
			listener.exitToStringFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitToStringFunction) {
			return visitor.visitToStringFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConcatFunctionContext extends StringExpressionContext {
	public CONCAT(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.CONCAT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public stringExpression(): StringExpressionContext[];
	public stringExpression(i: number): StringExpressionContext;
	public stringExpression(i?: number): StringExpressionContext | StringExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringExpressionContext);
		} else {
			return this.getRuleContext(i, StringExpressionContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CustomColumnExpressionsParser.COMMA);
		} else {
			return this.getToken(CustomColumnExpressionsParser.COMMA, i);
		}
	}
	constructor(ctx: StringExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterConcatFunction) {
			listener.enterConcatFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitConcatFunction) {
			listener.exitConcatFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitConcatFunction) {
			return visitor.visitConcatFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TrimFunctionContext extends StringExpressionContext {
	public _stringToTrim!: StringExpressionContext;
	public TRIM(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.TRIM, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public stringExpression(): StringExpressionContext {
		return this.getRuleContext(0, StringExpressionContext);
	}
	constructor(ctx: StringExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterTrimFunction) {
			listener.enterTrimFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitTrimFunction) {
			listener.exitTrimFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitTrimFunction) {
			return visitor.visitTrimFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LowerFunctionContext extends StringExpressionContext {
	public _stringValue!: StringExpressionContext;
	public LOWER(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LOWER, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public stringExpression(): StringExpressionContext {
		return this.getRuleContext(0, StringExpressionContext);
	}
	constructor(ctx: StringExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterLowerFunction) {
			listener.enterLowerFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitLowerFunction) {
			listener.exitLowerFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitLowerFunction) {
			return visitor.visitLowerFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UpperFunctionContext extends StringExpressionContext {
	public _stringValue!: StringExpressionContext;
	public UPPER(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.UPPER, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public stringExpression(): StringExpressionContext {
		return this.getRuleContext(0, StringExpressionContext);
	}
	constructor(ctx: StringExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterUpperFunction) {
			listener.enterUpperFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitUpperFunction) {
			listener.exitUpperFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitUpperFunction) {
			return visitor.visitUpperFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LeftFunctionContext extends StringExpressionContext {
	public _text!: StringExpressionContext;
	public _numChars!: NumericExpressionContext;
	public LEFT(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LEFT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public stringExpression(): StringExpressionContext {
		return this.getRuleContext(0, StringExpressionContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CustomColumnExpressionsParser.COMMA, 0); }
	public numericExpression(): NumericExpressionContext | undefined {
		return this.tryGetRuleContext(0, NumericExpressionContext);
	}
	constructor(ctx: StringExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterLeftFunction) {
			listener.enterLeftFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitLeftFunction) {
			listener.exitLeftFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitLeftFunction) {
			return visitor.visitLeftFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RightFunctionContext extends StringExpressionContext {
	public _text!: StringExpressionContext;
	public _numChars!: NumericExpressionContext;
	public RIGHT(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RIGHT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public stringExpression(): StringExpressionContext {
		return this.getRuleContext(0, StringExpressionContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CustomColumnExpressionsParser.COMMA, 0); }
	public numericExpression(): NumericExpressionContext | undefined {
		return this.tryGetRuleContext(0, NumericExpressionContext);
	}
	constructor(ctx: StringExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterRightFunction) {
			listener.enterRightFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitRightFunction) {
			listener.exitRightFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitRightFunction) {
			return visitor.visitRightFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MidFunctionContext extends StringExpressionContext {
	public _text!: StringExpressionContext;
	public _startNum!: NumericExpressionContext;
	public _numChars!: NumericExpressionContext;
	public MID(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.MID, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CustomColumnExpressionsParser.COMMA);
		} else {
			return this.getToken(CustomColumnExpressionsParser.COMMA, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public stringExpression(): StringExpressionContext {
		return this.getRuleContext(0, StringExpressionContext);
	}
	public numericExpression(): NumericExpressionContext[];
	public numericExpression(i: number): NumericExpressionContext;
	public numericExpression(i?: number): NumericExpressionContext | NumericExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumericExpressionContext);
		} else {
			return this.getRuleContext(i, NumericExpressionContext);
		}
	}
	constructor(ctx: StringExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterMidFunction) {
			listener.enterMidFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitMidFunction) {
			listener.exitMidFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitMidFunction) {
			return visitor.visitMidFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubstituteFunctionContext extends StringExpressionContext {
	public _text!: StringExpressionContext;
	public _oldText!: StringExpressionContext;
	public _newText!: StringExpressionContext;
	public _instanceNum!: NumericExpressionContext;
	public SUBSTITUTE(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.SUBSTITUTE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CustomColumnExpressionsParser.COMMA);
		} else {
			return this.getToken(CustomColumnExpressionsParser.COMMA, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public stringExpression(): StringExpressionContext[];
	public stringExpression(i: number): StringExpressionContext;
	public stringExpression(i?: number): StringExpressionContext | StringExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringExpressionContext);
		} else {
			return this.getRuleContext(i, StringExpressionContext);
		}
	}
	public numericExpression(): NumericExpressionContext | undefined {
		return this.tryGetRuleContext(0, NumericExpressionContext);
	}
	constructor(ctx: StringExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterSubstituteFunction) {
			listener.enterSubstituteFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitSubstituteFunction) {
			listener.exitSubstituteFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitSubstituteFunction) {
			return visitor.visitSubstituteFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReplaceFunctionContext extends StringExpressionContext {
	public _oldText!: StringExpressionContext;
	public _startNum!: NumericExpressionContext;
	public _numChars!: NumericExpressionContext;
	public _newText!: StringExpressionContext;
	public REPLACE(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.REPLACE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CustomColumnExpressionsParser.COMMA);
		} else {
			return this.getToken(CustomColumnExpressionsParser.COMMA, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public stringExpression(): StringExpressionContext[];
	public stringExpression(i: number): StringExpressionContext;
	public stringExpression(i?: number): StringExpressionContext | StringExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringExpressionContext);
		} else {
			return this.getRuleContext(i, StringExpressionContext);
		}
	}
	public numericExpression(): NumericExpressionContext[];
	public numericExpression(i: number): NumericExpressionContext;
	public numericExpression(i?: number): NumericExpressionContext | NumericExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumericExpressionContext);
		} else {
			return this.getRuleContext(i, NumericExpressionContext);
		}
	}
	constructor(ctx: StringExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterReplaceFunction) {
			listener.enterReplaceFunction(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitReplaceFunction) {
			listener.exitReplaceFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitReplaceFunction) {
			return visitor.visitReplaceFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringConditionExpContext extends StringExpressionContext {
	public _condition!: BooleanExpressionContext;
	public _thenSection!: StringExpressionContext;
	public _elseSection!: StringExpressionContext;
	public IF(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.IF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.LPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CustomColumnExpressionsParser.COMMA);
		} else {
			return this.getToken(CustomColumnExpressionsParser.COMMA, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.RPAREN, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	public stringExpression(): StringExpressionContext[];
	public stringExpression(i: number): StringExpressionContext;
	public stringExpression(i?: number): StringExpressionContext | StringExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringExpressionContext);
		} else {
			return this.getRuleContext(i, StringExpressionContext);
		}
	}
	constructor(ctx: StringExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterStringConditionExp) {
			listener.enterStringConditionExp(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitStringConditionExp) {
			listener.exitStringConditionExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitStringConditionExp) {
			return visitor.visitStringConditionExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringValueContext extends StringExpressionContext {
	public STRING_VALUE(): TerminalNode | undefined { return this.tryGetToken(CustomColumnExpressionsParser.STRING_VALUE, 0); }
	public DATE_VALUE(): TerminalNode | undefined { return this.tryGetToken(CustomColumnExpressionsParser.DATE_VALUE, 0); }
	constructor(ctx: StringExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterStringValue) {
			listener.enterStringValue(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitStringValue) {
			listener.exitStringValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitStringValue) {
			return visitor.visitStringValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringColumnNameContext extends StringExpressionContext {
	public COLUMN_NAME(): TerminalNode { return this.getToken(CustomColumnExpressionsParser.COLUMN_NAME, 0); }
	constructor(ctx: StringExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CustomColumnExpressionsListener): void {
		if (listener.enterStringColumnName) {
			listener.enterStringColumnName(this);
		}
	}
	// @Override
	public exitRule(listener: CustomColumnExpressionsListener): void {
		if (listener.exitStringColumnName) {
			listener.exitStringColumnName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CustomColumnExpressionsVisitor<Result>): Result {
		if (visitor.visitStringColumnName) {
			return visitor.visitStringColumnName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


