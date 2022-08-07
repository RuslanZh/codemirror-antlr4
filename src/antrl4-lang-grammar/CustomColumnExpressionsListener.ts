// Generated from ./src/antrl4-lang-grammar/CustomColumnExpressions.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ColumnNameContext } from "./CustomColumnExpressionsParser";
import { BooleanExpContext } from "./CustomColumnExpressionsParser";
import { NumericExpContext } from "./CustomColumnExpressionsParser";
import { DateExpContext } from "./CustomColumnExpressionsParser";
import { StringExpContext } from "./CustomColumnExpressionsParser";
import { ToStringFunctionContext } from "./CustomColumnExpressionsParser";
import { ConcatFunctionContext } from "./CustomColumnExpressionsParser";
import { TrimFunctionContext } from "./CustomColumnExpressionsParser";
import { LowerFunctionContext } from "./CustomColumnExpressionsParser";
import { UpperFunctionContext } from "./CustomColumnExpressionsParser";
import { LeftFunctionContext } from "./CustomColumnExpressionsParser";
import { RightFunctionContext } from "./CustomColumnExpressionsParser";
import { MidFunctionContext } from "./CustomColumnExpressionsParser";
import { SubstituteFunctionContext } from "./CustomColumnExpressionsParser";
import { ReplaceFunctionContext } from "./CustomColumnExpressionsParser";
import { StringConditionExpContext } from "./CustomColumnExpressionsParser";
import { StringValueContext } from "./CustomColumnExpressionsParser";
import { StringColumnNameContext } from "./CustomColumnExpressionsParser";
import { ToDateExpContext } from "./CustomColumnExpressionsParser";
import { NowFunctionContext } from "./CustomColumnExpressionsParser";
import { DateConditionExpContext } from "./CustomColumnExpressionsParser";
import { DateValueContext } from "./CustomColumnExpressionsParser";
import { DateColumnNameContext } from "./CustomColumnExpressionsParser";
import { NumericParenthesisContext } from "./CustomColumnExpressionsParser";
import { PowerExpContext } from "./CustomColumnExpressionsParser";
import { MultiplyExpContext } from "./CustomColumnExpressionsParser";
import { DivisionExpContext } from "./CustomColumnExpressionsParser";
import { AdditionExpContext } from "./CustomColumnExpressionsParser";
import { SubtractionExpContext } from "./CustomColumnExpressionsParser";
import { ToNumericFunctionContext } from "./CustomColumnExpressionsParser";
import { ModFunctionContext } from "./CustomColumnExpressionsParser";
import { AbsFunctionContext } from "./CustomColumnExpressionsParser";
import { LenghtFunctionContext } from "./CustomColumnExpressionsParser";
import { FindFunctionContext } from "./CustomColumnExpressionsParser";
import { DayFunctionContext } from "./CustomColumnExpressionsParser";
import { WeekFunctionContext } from "./CustomColumnExpressionsParser";
import { WeekDayFunctionContext } from "./CustomColumnExpressionsParser";
import { MonthFunctionContext } from "./CustomColumnExpressionsParser";
import { YearFunctionContext } from "./CustomColumnExpressionsParser";
import { HourFunctionContext } from "./CustomColumnExpressionsParser";
import { MinuteFunctionContext } from "./CustomColumnExpressionsParser";
import { DateDiffFunctionContext } from "./CustomColumnExpressionsParser";
import { NumericConditionExpContext } from "./CustomColumnExpressionsParser";
import { NumericValueContext } from "./CustomColumnExpressionsParser";
import { NumericColumnNameContext } from "./CustomColumnExpressionsParser";
import { LogicalParenthesisContext } from "./CustomColumnExpressionsParser";
import { NumericEqualExpContext } from "./CustomColumnExpressionsParser";
import { NumericNotEqualExpContext } from "./CustomColumnExpressionsParser";
import { NumericGreaterThanExpContext } from "./CustomColumnExpressionsParser";
import { NumericLessThanExpContext } from "./CustomColumnExpressionsParser";
import { NumericGreaterOrEqualExpContext } from "./CustomColumnExpressionsParser";
import { NumericLessOrEqualExpContext } from "./CustomColumnExpressionsParser";
import { DateEqualExpContext } from "./CustomColumnExpressionsParser";
import { DateNotEqualExpContext } from "./CustomColumnExpressionsParser";
import { DateGreaterThanExpContext } from "./CustomColumnExpressionsParser";
import { DateLessThanExpContext } from "./CustomColumnExpressionsParser";
import { DateGreaterOrEqualExpContext } from "./CustomColumnExpressionsParser";
import { DateLessOrEqualExpContext } from "./CustomColumnExpressionsParser";
import { ToBooleanFunctionContext } from "./CustomColumnExpressionsParser";
import { AndFunctionContext } from "./CustomColumnExpressionsParser";
import { OrFunctionContext } from "./CustomColumnExpressionsParser";
import { XorFunctionContext } from "./CustomColumnExpressionsParser";
import { NotFunctionContext } from "./CustomColumnExpressionsParser";
import { ExactFunctionContext } from "./CustomColumnExpressionsParser";
import { BooleanConditionExpContext } from "./CustomColumnExpressionsParser";
import { BooleanValueExpContext } from "./CustomColumnExpressionsParser";
import { BooleanColumnNameContext } from "./CustomColumnExpressionsParser";
import { ObjectExpressionContext } from "./CustomColumnExpressionsParser";
import { NumericExpressionContext } from "./CustomColumnExpressionsParser";
import { BooleanExpressionContext } from "./CustomColumnExpressionsParser";
import { DateExpressionContext } from "./CustomColumnExpressionsParser";
import { StringExpressionContext } from "./CustomColumnExpressionsParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CustomColumnExpressionsParser`.
 */
export interface CustomColumnExpressionsListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `ColumnName`
	 * labeled alternative in `CustomColumnExpressionsParser.objectExpression`.
	 * @param ctx the parse tree
	 */
	enterColumnName?: (ctx: ColumnNameContext) => void;
	/**
	 * Exit a parse tree produced by the `ColumnName`
	 * labeled alternative in `CustomColumnExpressionsParser.objectExpression`.
	 * @param ctx the parse tree
	 */
	exitColumnName?: (ctx: ColumnNameContext) => void;

	/**
	 * Enter a parse tree produced by the `BooleanExp`
	 * labeled alternative in `CustomColumnExpressionsParser.objectExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanExp?: (ctx: BooleanExpContext) => void;
	/**
	 * Exit a parse tree produced by the `BooleanExp`
	 * labeled alternative in `CustomColumnExpressionsParser.objectExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanExp?: (ctx: BooleanExpContext) => void;

	/**
	 * Enter a parse tree produced by the `NumericExp`
	 * labeled alternative in `CustomColumnExpressionsParser.objectExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericExp?: (ctx: NumericExpContext) => void;
	/**
	 * Exit a parse tree produced by the `NumericExp`
	 * labeled alternative in `CustomColumnExpressionsParser.objectExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericExp?: (ctx: NumericExpContext) => void;

	/**
	 * Enter a parse tree produced by the `DateExp`
	 * labeled alternative in `CustomColumnExpressionsParser.objectExpression`.
	 * @param ctx the parse tree
	 */
	enterDateExp?: (ctx: DateExpContext) => void;
	/**
	 * Exit a parse tree produced by the `DateExp`
	 * labeled alternative in `CustomColumnExpressionsParser.objectExpression`.
	 * @param ctx the parse tree
	 */
	exitDateExp?: (ctx: DateExpContext) => void;

	/**
	 * Enter a parse tree produced by the `StringExp`
	 * labeled alternative in `CustomColumnExpressionsParser.objectExpression`.
	 * @param ctx the parse tree
	 */
	enterStringExp?: (ctx: StringExpContext) => void;
	/**
	 * Exit a parse tree produced by the `StringExp`
	 * labeled alternative in `CustomColumnExpressionsParser.objectExpression`.
	 * @param ctx the parse tree
	 */
	exitStringExp?: (ctx: StringExpContext) => void;

	/**
	 * Enter a parse tree produced by the `ToStringFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	enterToStringFunction?: (ctx: ToStringFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `ToStringFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	exitToStringFunction?: (ctx: ToStringFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `ConcatFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	enterConcatFunction?: (ctx: ConcatFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `ConcatFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	exitConcatFunction?: (ctx: ConcatFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `TrimFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	enterTrimFunction?: (ctx: TrimFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `TrimFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	exitTrimFunction?: (ctx: TrimFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `LowerFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	enterLowerFunction?: (ctx: LowerFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `LowerFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	exitLowerFunction?: (ctx: LowerFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `UpperFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	enterUpperFunction?: (ctx: UpperFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `UpperFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	exitUpperFunction?: (ctx: UpperFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `LeftFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	enterLeftFunction?: (ctx: LeftFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `LeftFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	exitLeftFunction?: (ctx: LeftFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `RightFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	enterRightFunction?: (ctx: RightFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `RightFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	exitRightFunction?: (ctx: RightFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `MidFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	enterMidFunction?: (ctx: MidFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `MidFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	exitMidFunction?: (ctx: MidFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `SubstituteFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	enterSubstituteFunction?: (ctx: SubstituteFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `SubstituteFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	exitSubstituteFunction?: (ctx: SubstituteFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `ReplaceFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	enterReplaceFunction?: (ctx: ReplaceFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `ReplaceFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	exitReplaceFunction?: (ctx: ReplaceFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `StringConditionExp`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	enterStringConditionExp?: (ctx: StringConditionExpContext) => void;
	/**
	 * Exit a parse tree produced by the `StringConditionExp`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	exitStringConditionExp?: (ctx: StringConditionExpContext) => void;

	/**
	 * Enter a parse tree produced by the `StringValue`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	enterStringValue?: (ctx: StringValueContext) => void;
	/**
	 * Exit a parse tree produced by the `StringValue`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	exitStringValue?: (ctx: StringValueContext) => void;

	/**
	 * Enter a parse tree produced by the `StringColumnName`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	enterStringColumnName?: (ctx: StringColumnNameContext) => void;
	/**
	 * Exit a parse tree produced by the `StringColumnName`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	exitStringColumnName?: (ctx: StringColumnNameContext) => void;

	/**
	 * Enter a parse tree produced by the `ToDateExp`
	 * labeled alternative in `CustomColumnExpressionsParser.dateExpression`.
	 * @param ctx the parse tree
	 */
	enterToDateExp?: (ctx: ToDateExpContext) => void;
	/**
	 * Exit a parse tree produced by the `ToDateExp`
	 * labeled alternative in `CustomColumnExpressionsParser.dateExpression`.
	 * @param ctx the parse tree
	 */
	exitToDateExp?: (ctx: ToDateExpContext) => void;

	/**
	 * Enter a parse tree produced by the `NowFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.dateExpression`.
	 * @param ctx the parse tree
	 */
	enterNowFunction?: (ctx: NowFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `NowFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.dateExpression`.
	 * @param ctx the parse tree
	 */
	exitNowFunction?: (ctx: NowFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `DateConditionExp`
	 * labeled alternative in `CustomColumnExpressionsParser.dateExpression`.
	 * @param ctx the parse tree
	 */
	enterDateConditionExp?: (ctx: DateConditionExpContext) => void;
	/**
	 * Exit a parse tree produced by the `DateConditionExp`
	 * labeled alternative in `CustomColumnExpressionsParser.dateExpression`.
	 * @param ctx the parse tree
	 */
	exitDateConditionExp?: (ctx: DateConditionExpContext) => void;

	/**
	 * Enter a parse tree produced by the `DateValue`
	 * labeled alternative in `CustomColumnExpressionsParser.dateExpression`.
	 * @param ctx the parse tree
	 */
	enterDateValue?: (ctx: DateValueContext) => void;
	/**
	 * Exit a parse tree produced by the `DateValue`
	 * labeled alternative in `CustomColumnExpressionsParser.dateExpression`.
	 * @param ctx the parse tree
	 */
	exitDateValue?: (ctx: DateValueContext) => void;

	/**
	 * Enter a parse tree produced by the `DateColumnName`
	 * labeled alternative in `CustomColumnExpressionsParser.dateExpression`.
	 * @param ctx the parse tree
	 */
	enterDateColumnName?: (ctx: DateColumnNameContext) => void;
	/**
	 * Exit a parse tree produced by the `DateColumnName`
	 * labeled alternative in `CustomColumnExpressionsParser.dateExpression`.
	 * @param ctx the parse tree
	 */
	exitDateColumnName?: (ctx: DateColumnNameContext) => void;

	/**
	 * Enter a parse tree produced by the `NumericParenthesis`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericParenthesis?: (ctx: NumericParenthesisContext) => void;
	/**
	 * Exit a parse tree produced by the `NumericParenthesis`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericParenthesis?: (ctx: NumericParenthesisContext) => void;

	/**
	 * Enter a parse tree produced by the `PowerExp`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	enterPowerExp?: (ctx: PowerExpContext) => void;
	/**
	 * Exit a parse tree produced by the `PowerExp`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	exitPowerExp?: (ctx: PowerExpContext) => void;

	/**
	 * Enter a parse tree produced by the `MultiplyExp`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplyExp?: (ctx: MultiplyExpContext) => void;
	/**
	 * Exit a parse tree produced by the `MultiplyExp`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplyExp?: (ctx: MultiplyExpContext) => void;

	/**
	 * Enter a parse tree produced by the `DivisionExp`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	enterDivisionExp?: (ctx: DivisionExpContext) => void;
	/**
	 * Exit a parse tree produced by the `DivisionExp`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	exitDivisionExp?: (ctx: DivisionExpContext) => void;

	/**
	 * Enter a parse tree produced by the `AdditionExp`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditionExp?: (ctx: AdditionExpContext) => void;
	/**
	 * Exit a parse tree produced by the `AdditionExp`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditionExp?: (ctx: AdditionExpContext) => void;

	/**
	 * Enter a parse tree produced by the `SubtractionExp`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	enterSubtractionExp?: (ctx: SubtractionExpContext) => void;
	/**
	 * Exit a parse tree produced by the `SubtractionExp`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	exitSubtractionExp?: (ctx: SubtractionExpContext) => void;

	/**
	 * Enter a parse tree produced by the `ToNumericFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	enterToNumericFunction?: (ctx: ToNumericFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `ToNumericFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	exitToNumericFunction?: (ctx: ToNumericFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `ModFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	enterModFunction?: (ctx: ModFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `ModFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	exitModFunction?: (ctx: ModFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `AbsFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	enterAbsFunction?: (ctx: AbsFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `AbsFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	exitAbsFunction?: (ctx: AbsFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `LenghtFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	enterLenghtFunction?: (ctx: LenghtFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `LenghtFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	exitLenghtFunction?: (ctx: LenghtFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `FindFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	enterFindFunction?: (ctx: FindFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `FindFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	exitFindFunction?: (ctx: FindFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `DayFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	enterDayFunction?: (ctx: DayFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `DayFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	exitDayFunction?: (ctx: DayFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `WeekFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	enterWeekFunction?: (ctx: WeekFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `WeekFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	exitWeekFunction?: (ctx: WeekFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `WeekDayFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	enterWeekDayFunction?: (ctx: WeekDayFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `WeekDayFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	exitWeekDayFunction?: (ctx: WeekDayFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `MonthFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	enterMonthFunction?: (ctx: MonthFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `MonthFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	exitMonthFunction?: (ctx: MonthFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `YearFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	enterYearFunction?: (ctx: YearFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `YearFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	exitYearFunction?: (ctx: YearFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `HourFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	enterHourFunction?: (ctx: HourFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `HourFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	exitHourFunction?: (ctx: HourFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `MinuteFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	enterMinuteFunction?: (ctx: MinuteFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `MinuteFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	exitMinuteFunction?: (ctx: MinuteFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `DateDiffFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	enterDateDiffFunction?: (ctx: DateDiffFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `DateDiffFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	exitDateDiffFunction?: (ctx: DateDiffFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `NumericConditionExp`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericConditionExp?: (ctx: NumericConditionExpContext) => void;
	/**
	 * Exit a parse tree produced by the `NumericConditionExp`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericConditionExp?: (ctx: NumericConditionExpContext) => void;

	/**
	 * Enter a parse tree produced by the `NumericValue`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericValue?: (ctx: NumericValueContext) => void;
	/**
	 * Exit a parse tree produced by the `NumericValue`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericValue?: (ctx: NumericValueContext) => void;

	/**
	 * Enter a parse tree produced by the `NumericColumnName`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericColumnName?: (ctx: NumericColumnNameContext) => void;
	/**
	 * Exit a parse tree produced by the `NumericColumnName`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericColumnName?: (ctx: NumericColumnNameContext) => void;

	/**
	 * Enter a parse tree produced by the `LogicalParenthesis`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalParenthesis?: (ctx: LogicalParenthesisContext) => void;
	/**
	 * Exit a parse tree produced by the `LogicalParenthesis`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalParenthesis?: (ctx: LogicalParenthesisContext) => void;

	/**
	 * Enter a parse tree produced by the `NumericEqualExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericEqualExp?: (ctx: NumericEqualExpContext) => void;
	/**
	 * Exit a parse tree produced by the `NumericEqualExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericEqualExp?: (ctx: NumericEqualExpContext) => void;

	/**
	 * Enter a parse tree produced by the `NumericNotEqualExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericNotEqualExp?: (ctx: NumericNotEqualExpContext) => void;
	/**
	 * Exit a parse tree produced by the `NumericNotEqualExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericNotEqualExp?: (ctx: NumericNotEqualExpContext) => void;

	/**
	 * Enter a parse tree produced by the `NumericGreaterThanExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericGreaterThanExp?: (ctx: NumericGreaterThanExpContext) => void;
	/**
	 * Exit a parse tree produced by the `NumericGreaterThanExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericGreaterThanExp?: (ctx: NumericGreaterThanExpContext) => void;

	/**
	 * Enter a parse tree produced by the `NumericLessThanExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericLessThanExp?: (ctx: NumericLessThanExpContext) => void;
	/**
	 * Exit a parse tree produced by the `NumericLessThanExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericLessThanExp?: (ctx: NumericLessThanExpContext) => void;

	/**
	 * Enter a parse tree produced by the `NumericGreaterOrEqualExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericGreaterOrEqualExp?: (ctx: NumericGreaterOrEqualExpContext) => void;
	/**
	 * Exit a parse tree produced by the `NumericGreaterOrEqualExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericGreaterOrEqualExp?: (ctx: NumericGreaterOrEqualExpContext) => void;

	/**
	 * Enter a parse tree produced by the `NumericLessOrEqualExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericLessOrEqualExp?: (ctx: NumericLessOrEqualExpContext) => void;
	/**
	 * Exit a parse tree produced by the `NumericLessOrEqualExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericLessOrEqualExp?: (ctx: NumericLessOrEqualExpContext) => void;

	/**
	 * Enter a parse tree produced by the `DateEqualExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterDateEqualExp?: (ctx: DateEqualExpContext) => void;
	/**
	 * Exit a parse tree produced by the `DateEqualExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitDateEqualExp?: (ctx: DateEqualExpContext) => void;

	/**
	 * Enter a parse tree produced by the `DateNotEqualExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterDateNotEqualExp?: (ctx: DateNotEqualExpContext) => void;
	/**
	 * Exit a parse tree produced by the `DateNotEqualExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitDateNotEqualExp?: (ctx: DateNotEqualExpContext) => void;

	/**
	 * Enter a parse tree produced by the `DateGreaterThanExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterDateGreaterThanExp?: (ctx: DateGreaterThanExpContext) => void;
	/**
	 * Exit a parse tree produced by the `DateGreaterThanExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitDateGreaterThanExp?: (ctx: DateGreaterThanExpContext) => void;

	/**
	 * Enter a parse tree produced by the `DateLessThanExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterDateLessThanExp?: (ctx: DateLessThanExpContext) => void;
	/**
	 * Exit a parse tree produced by the `DateLessThanExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitDateLessThanExp?: (ctx: DateLessThanExpContext) => void;

	/**
	 * Enter a parse tree produced by the `DateGreaterOrEqualExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterDateGreaterOrEqualExp?: (ctx: DateGreaterOrEqualExpContext) => void;
	/**
	 * Exit a parse tree produced by the `DateGreaterOrEqualExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitDateGreaterOrEqualExp?: (ctx: DateGreaterOrEqualExpContext) => void;

	/**
	 * Enter a parse tree produced by the `DateLessOrEqualExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterDateLessOrEqualExp?: (ctx: DateLessOrEqualExpContext) => void;
	/**
	 * Exit a parse tree produced by the `DateLessOrEqualExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitDateLessOrEqualExp?: (ctx: DateLessOrEqualExpContext) => void;

	/**
	 * Enter a parse tree produced by the `ToBooleanFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterToBooleanFunction?: (ctx: ToBooleanFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `ToBooleanFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitToBooleanFunction?: (ctx: ToBooleanFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `AndFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterAndFunction?: (ctx: AndFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `AndFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitAndFunction?: (ctx: AndFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `OrFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterOrFunction?: (ctx: OrFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `OrFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitOrFunction?: (ctx: OrFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `XorFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterXorFunction?: (ctx: XorFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `XorFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitXorFunction?: (ctx: XorFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `NotFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterNotFunction?: (ctx: NotFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `NotFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitNotFunction?: (ctx: NotFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `ExactFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterExactFunction?: (ctx: ExactFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `ExactFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitExactFunction?: (ctx: ExactFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `BooleanConditionExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanConditionExp?: (ctx: BooleanConditionExpContext) => void;
	/**
	 * Exit a parse tree produced by the `BooleanConditionExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanConditionExp?: (ctx: BooleanConditionExpContext) => void;

	/**
	 * Enter a parse tree produced by the `BooleanValueExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanValueExp?: (ctx: BooleanValueExpContext) => void;
	/**
	 * Exit a parse tree produced by the `BooleanValueExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanValueExp?: (ctx: BooleanValueExpContext) => void;

	/**
	 * Enter a parse tree produced by the `BooleanColumnName`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanColumnName?: (ctx: BooleanColumnNameContext) => void;
	/**
	 * Exit a parse tree produced by the `BooleanColumnName`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanColumnName?: (ctx: BooleanColumnNameContext) => void;

	/**
	 * Enter a parse tree produced by `CustomColumnExpressionsParser.objectExpression`.
	 * @param ctx the parse tree
	 */
	enterObjectExpression?: (ctx: ObjectExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CustomColumnExpressionsParser.objectExpression`.
	 * @param ctx the parse tree
	 */
	exitObjectExpression?: (ctx: ObjectExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericExpression?: (ctx: NumericExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericExpression?: (ctx: NumericExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanExpression?: (ctx: BooleanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanExpression?: (ctx: BooleanExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CustomColumnExpressionsParser.dateExpression`.
	 * @param ctx the parse tree
	 */
	enterDateExpression?: (ctx: DateExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CustomColumnExpressionsParser.dateExpression`.
	 * @param ctx the parse tree
	 */
	exitDateExpression?: (ctx: DateExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	enterStringExpression?: (ctx: StringExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 */
	exitStringExpression?: (ctx: StringExpressionContext) => void;
}

