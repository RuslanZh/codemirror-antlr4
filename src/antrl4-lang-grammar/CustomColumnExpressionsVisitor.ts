// Generated from ./src/antrl4-lang-grammar/CustomColumnExpressions.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CustomColumnExpressionsParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CustomColumnExpressionsVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `ColumnName`
	 * labeled alternative in `CustomColumnExpressionsParser.objectExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnName?: (ctx: ColumnNameContext) => Result;

	/**
	 * Visit a parse tree produced by the `BooleanExp`
	 * labeled alternative in `CustomColumnExpressionsParser.objectExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanExp?: (ctx: BooleanExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `NumericExp`
	 * labeled alternative in `CustomColumnExpressionsParser.objectExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericExp?: (ctx: NumericExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `DateExp`
	 * labeled alternative in `CustomColumnExpressionsParser.objectExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateExp?: (ctx: DateExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `StringExp`
	 * labeled alternative in `CustomColumnExpressionsParser.objectExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringExp?: (ctx: StringExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `ToStringFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitToStringFunction?: (ctx: ToStringFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ConcatFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConcatFunction?: (ctx: ConcatFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `TrimFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrimFunction?: (ctx: TrimFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LowerFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLowerFunction?: (ctx: LowerFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `UpperFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpperFunction?: (ctx: UpperFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LeftFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeftFunction?: (ctx: LeftFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `RightFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRightFunction?: (ctx: RightFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `MidFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMidFunction?: (ctx: MidFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `SubstituteFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubstituteFunction?: (ctx: SubstituteFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ReplaceFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplaceFunction?: (ctx: ReplaceFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `StringConditionExp`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringConditionExp?: (ctx: StringConditionExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `StringValue`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringValue?: (ctx: StringValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `StringColumnName`
	 * labeled alternative in `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringColumnName?: (ctx: StringColumnNameContext) => Result;

	/**
	 * Visit a parse tree produced by the `ToDateExp`
	 * labeled alternative in `CustomColumnExpressionsParser.dateExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitToDateExp?: (ctx: ToDateExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `NowFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.dateExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNowFunction?: (ctx: NowFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `DateConditionExp`
	 * labeled alternative in `CustomColumnExpressionsParser.dateExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateConditionExp?: (ctx: DateConditionExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `DateValue`
	 * labeled alternative in `CustomColumnExpressionsParser.dateExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateValue?: (ctx: DateValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `DateColumnName`
	 * labeled alternative in `CustomColumnExpressionsParser.dateExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateColumnName?: (ctx: DateColumnNameContext) => Result;

	/**
	 * Visit a parse tree produced by the `NumericParenthesis`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericParenthesis?: (ctx: NumericParenthesisContext) => Result;

	/**
	 * Visit a parse tree produced by the `PowerExp`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPowerExp?: (ctx: PowerExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `MultiplyExp`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplyExp?: (ctx: MultiplyExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `DivisionExp`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDivisionExp?: (ctx: DivisionExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `AdditionExp`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditionExp?: (ctx: AdditionExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `SubtractionExp`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubtractionExp?: (ctx: SubtractionExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `ToNumericFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitToNumericFunction?: (ctx: ToNumericFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ModFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModFunction?: (ctx: ModFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AbsFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbsFunction?: (ctx: AbsFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LenghtFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLenghtFunction?: (ctx: LenghtFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `FindFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFindFunction?: (ctx: FindFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `DayFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDayFunction?: (ctx: DayFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `WeekFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWeekFunction?: (ctx: WeekFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `WeekDayFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWeekDayFunction?: (ctx: WeekDayFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `MonthFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonthFunction?: (ctx: MonthFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `YearFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYearFunction?: (ctx: YearFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `HourFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHourFunction?: (ctx: HourFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `MinuteFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMinuteFunction?: (ctx: MinuteFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `DateDiffFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateDiffFunction?: (ctx: DateDiffFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `NumericConditionExp`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericConditionExp?: (ctx: NumericConditionExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `NumericValue`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericValue?: (ctx: NumericValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `NumericColumnName`
	 * labeled alternative in `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericColumnName?: (ctx: NumericColumnNameContext) => Result;

	/**
	 * Visit a parse tree produced by the `LogicalParenthesis`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalParenthesis?: (ctx: LogicalParenthesisContext) => Result;

	/**
	 * Visit a parse tree produced by the `NumericEqualExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericEqualExp?: (ctx: NumericEqualExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `NumericNotEqualExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericNotEqualExp?: (ctx: NumericNotEqualExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `NumericGreaterThanExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericGreaterThanExp?: (ctx: NumericGreaterThanExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `NumericLessThanExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLessThanExp?: (ctx: NumericLessThanExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `NumericGreaterOrEqualExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericGreaterOrEqualExp?: (ctx: NumericGreaterOrEqualExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `NumericLessOrEqualExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLessOrEqualExp?: (ctx: NumericLessOrEqualExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `DateEqualExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateEqualExp?: (ctx: DateEqualExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `DateNotEqualExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateNotEqualExp?: (ctx: DateNotEqualExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `DateGreaterThanExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateGreaterThanExp?: (ctx: DateGreaterThanExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `DateLessThanExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateLessThanExp?: (ctx: DateLessThanExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `DateGreaterOrEqualExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateGreaterOrEqualExp?: (ctx: DateGreaterOrEqualExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `DateLessOrEqualExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateLessOrEqualExp?: (ctx: DateLessOrEqualExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `ToBooleanFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitToBooleanFunction?: (ctx: ToBooleanFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AndFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndFunction?: (ctx: AndFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `OrFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrFunction?: (ctx: OrFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `XorFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXorFunction?: (ctx: XorFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `NotFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotFunction?: (ctx: NotFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExactFunction`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExactFunction?: (ctx: ExactFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BooleanConditionExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanConditionExp?: (ctx: BooleanConditionExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `BooleanValueExp`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanValueExp?: (ctx: BooleanValueExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `BooleanColumnName`
	 * labeled alternative in `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanColumnName?: (ctx: BooleanColumnNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomColumnExpressionsParser.objectExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectExpression?: (ctx: ObjectExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomColumnExpressionsParser.numericExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericExpression?: (ctx: NumericExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomColumnExpressionsParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanExpression?: (ctx: BooleanExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomColumnExpressionsParser.dateExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateExpression?: (ctx: DateExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CustomColumnExpressionsParser.stringExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringExpression?: (ctx: StringExpressionContext) => Result;
}

